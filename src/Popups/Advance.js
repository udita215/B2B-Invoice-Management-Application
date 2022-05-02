import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
} from "@mui/material";
//import AdvanSearchGrid from "../Components/AdvanSearchGrid";
const advanceData = [
  { placeholder: "Document ID", name: "doc_id", type: "" },
  { placeholder: "Invoice ID", name: "invoice_id", type: "" },
  { placeholder: "Customer Number", name: "cust_number", type: "" },
  { placeholder: "Business Year", name: "buisness_year", type: "" },
];

const AdvancePopup = (props) => {
  return (
    <>
      <DialogTitle
         sx={{
         
         backgroundColor: "#2C4350",
         fontSize: "13px",
         color: "white",
         marginRight: "0",
         paddingTop: "7px",
         height: "2vh",
         width:"30vw",

       }}
      >Advance Search </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "#2C4350",
          width:"30vw",
         
        }}>
        {advanceData.map((e) => (
          <Input
            required={e.required === false}
            style={{
              border: "2px solid black",
              backgroundColor: "white",
              borderRadius: "8px",
              height: "5.5vh",
              paddingLeft: "5px",
              margin: "10px",
              width: "44%",
            }}
            onChange={(ab) => {
              e.value = ab.target.value;
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
            width: "15vw",
            backgroundColor: "#2C4350",
            height: "5vh",
            color: "white",
         
            border:"1px solid white",
            fontSize: "10px",

          }}
          onClick={() => {
            let data = {};
            for (const value of advanceData) {
              if (value.value !== undefined && value.value !== "") //THIS ONE
                data[value.name] = value.value;
            }
            if (Object.entries(data).length > 0) {
              console.log(data);
              props.setAdvEnabled(true);

              props.changeAdvanceSearch(data);
              props.setpopup(false);
            }

            //  function call for data
          }}
        >
          Search
        </Button>

        <Button
         sx={{
            width: "15vw",
            backgroundColor: "#2C4350",
            height: "5vh",
            color: "white",
         
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
export default AdvancePopup;
