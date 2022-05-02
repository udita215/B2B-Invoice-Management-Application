import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  DialogContentText,
  Input,
} from "@mui/material";
import axios, { Axios } from "axios";

const DeletePopup = (props) => {
  const del = async (paramters) => {
    try {
      let response = await fetch(
        "http://localhost:8080/HRC_INTERNSHIP/DeleteServlet",
        {
          method: "POST",
          body: JSON.stringify(
            Object.assign(
              { sl_no: props.selectedRows.map((e) => e.sl_no) },
              paramters
            )
          ),
          mode: "no-cors",
        }
        //        params:paramters
      );
      response.json().then(e => console.log(e)).catch(er => console.log(er  ))

      props.setpopup({ val: false, obj: <></> });
    } catch (error) {
      console.log(error);
    }
  };

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
         

       }}>Delete Records ?</DialogTitle>
      <DialogContent
    sx={{
          backgroundColor: "#2C4350",
          
         
        }}
      >
        <DialogContentText
        sx={{  color: "white",
        height:"8vh"
        }}>
          Are you sure want to delete this records[s]?
        </DialogContentText>
        <Button
          sx={{
            
            backgroundColor: "#2C4350",
            
            color: "white",
            width:"17vw",
            border:"1px solid white",
            fontSize: "10px",
            marginRight:"5px"

          }}
          onClick={() => {
            props.setpopup({ val: false, obj: <></> });
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            
            backgroundColor: "#2C4350",
            
            color: "white",
            width:"17vw",
            border:"1px solid white",
            fontSize: "10px",

          }}
          onClick={() => {
            let data = "";
            del(data);
          }}
        >
          Delete
        </Button>
      </DialogContent>
    </>
  );
};
export default DeletePopup;
