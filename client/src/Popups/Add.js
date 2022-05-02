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

//TODO MAKE RESPONSIVE
const AddPopup = (props) => {
  const add = async (paramters) => {
    try {
      let response = await axios.get(
        "http://localhost:8080/HRC_INTERNSHIP/AddServlet",
        {
          params: paramters,
        }
      );

      props.setpopup({ val: false, obj: <></> });
    } catch (error) {
      console.log(error);
    }
  };

  const addData = [
    { placeholder: "Business Code", name: "business_code", type: "" },
    { placeholder: "Customer Number", name: "cust_number", type: "" },
    {
      required: false,
      placeholder: "Clear Date",
      name: "clear_date",
      type: "date",
    },
    { placeholder: "Business Year", name: "buisness_year", type: "number" },

    { placeholder: "Document Id", name: "doc_id", type: "" },
    { placeholder: "Posting Date", name: "posting_date", type: "date" },
    {
      placeholder: "Document Create Date",
      name: "document_create_date",
      type: "date",
    },
    { placeholder: "Due In Date", name: "due_in_date", type: "date" },
    { placeholder: "Invoice Currency", name: "invoice_currency", type: "" },
    { placeholder: "Document Type", name: "document_type", type: "" },
    { placeholder: "Posting ID", name: "posting_id", type: "" },
    { placeholder: "Total Open Amount", name: "total_open_amount", type: "" },
    {
      placeholder: "Baseline Create Date",
      name: "baseline_create_date",
      type: "date",
    },
    {
      placeholder: "Customer Payment Terms",
      name: "cust_payment_terms",
      type: "",
    },
    { placeholder: "Invoice ID", name: "invoice_id", type: "" },
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
      >
        Add
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "#2C4350",
          
         
        }}
      >
        {addData.map((e) => (
          <Input
            required={e.required === false}
            style={{
              border: "2px solid black",
              backgroundColor: "white",
              borderRadius: "8px",
              height: "6vh",
              paddingLeft: "5px",
              margin: "10px",
              width: "23%",
            }}
            onChange={(changed) => {
              e.value = changed.target.value;
            }}
            placeholder={e.placeholder}
            type={e.type}
            name={e.name}
          />
        ))}
      </DialogContent>
      <DialogActions
      sx={{backgroundColor: "#2C4350",
      
      }}
      >
        <Button
          sx={{
            width: "50vw",
            backgroundColor: "#2C4350",
            height: "5vh",
            color: "white",
         
            border:"1px solid white",
            fontSize: "10px",

          }}
          onClick={() => {
            let udita = {};

            // undefined = true

            for (const value of addData) {
              if (
                value.required === undefined &&
                (value.value === "" || value.value === undefined)
              ) {
                console.log(value);
                // TODOD ADD ERROR DIALOG
                return;
              }

              // udita.name = "val"

              udita[value.name] = value.value;
            }
            add(udita);
          }}
        >
          ADD
        </Button>

        <Button
          sx={{
            width: "50vw",
            backgroundColor: "#2C4350",
            height: "5vh",
            color: "white",
            fontSize: "10px",
            border:"1px solid white"
          }}
          onClick={() => {
            props.setpopup({ val: false, obj: <></> });
          }}
        >
          CANCEL
        </Button>
      </DialogActions>
    </>
  );
};
export default AddPopup;
