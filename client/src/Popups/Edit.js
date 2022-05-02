import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
} from "@mui/material";
import axios, { Axios } from "axios";

const EditPopup = (props) => {
  const edit = async (paramters) => {
    try {
      let response = await axios.get(
        "http://localhost:8080/HRC_INTERNSHIP/EditServlet",
        {
        //  props.selectedRows.map(e => e.sl_no);
          params: Object.assign({ sl_no: props.selectedRows[0].sl_no },paramters),
        }
      );

      props.setpopup({ val: false, obj: <></> });
    } catch (error) {
      console.log(error);
    }
  };

  const editData = [
    { placeholder: "Invoice Currency", name: "invoice_currency", type: "" },
    {
      placeholder: "Customer Payment Terms",
      name: "cust_payment_terms",
      type: "",
    },
  ];

  return (
    <>
      <DialogTitle
        sx={{
         
         backgroundColor: "#2C4350",
         fontSize: "13px",
         color: "white",
         marginRight: "0",
         paddingTop: "7px",
         height: "3vh",
         

       }}
      >Edit</DialogTitle>
      <DialogContent
      sx={{
          backgroundColor: "#2C4350",
          
         
        }}
      >
        {editData.map((e) => (
          <Input
            onChange={(ae) => {
              e.value = ae.target.value;
            }}
            required={e.required === false}
            style={{
              border: "2px solid black",
              backgroundColor: "white",
              borderRadius: "8px",
              height: "5.5vh",
              paddingLeft: "5px",
              margin: "10px",
              width: "45.5%",
            
            }}
          
            placeholder={e.placeholder}
            type={e.type}
            name={e.name}
          />
        ))}
      </DialogContent>
      <DialogActions
       sx={{
          backgroundColor: "#2C4350",
          
        
        }}>
        <Button
            sx={{
            
            backgroundColor: "#2C4350",
            
            color: "white",
            width:"20vw",
            border:"1px solid white",
            fontSize: "10px",

          }}
          onClick={() => {
            let data = {};

            // undefined = true

            for (const value of editData) {
              data[value.name] = value.value;
            }
            edit(data);
          }}
        >
          Edit
        </Button>

        <Button
            sx={{
            
            backgroundColor: "#2C4350",
           
            color: "white",
         width:"20vw",
            border:"1px solid white",
            fontSize: "10px",

          }}
          onClick={() => {
            props.setpopup({ val: false, obj: <></> });
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};
export default EditPopup;
