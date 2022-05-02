import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ButtonP.css";
import { Dialog, Input } from "@mui/material";
import AddPopup from "../Popups/Add";
import EditPopup from "../Popups/Edit";
import AdvancePopup from "../Popups/Advance";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeletePopup from "../Popups/Delete";

export default function ButtonsP({
  setval,
  val,
  changeAdvanceSearch,
  selectedRows,
  advEnabled,
  setAdvEnabled,
  setKey,
}) {
  const [popup, setpopup] = React.useState({ val: false, obj: <></> });
  let customSearchVal = "";
  const labelbtn = {
    marginTop: "5vh",
    fontSize: ".7rem",
    padding: "2 2 2 2",
  };

  return (
    <>
      <Dialog maxHeight={"90vh"} maxWidth={"100%"} open={popup.val}>
        {popup.obj}
      </Dialog>
      <Stack
        spacing={0}
        sx={{ paddingLeft: "2.2%", width: "97%" }}
        direction="row"
        className="stack"
      >
        <Button
          sx={Object.assign({ borderRadius: "5px 0 0 5px" }, labelbtn)}
          className="button b1"
          variant="outlined"
        >
          Predict
        </Button>

        <Button
          sx={Object.assign({ borderRadius: "0px" }, labelbtn)}
          className="button b2"
          variant="outlined"
        >
          Analytics View
        </Button>
        <Button
          sx={Object.assign(
            {
              backgroundColor: advEnabled ? "#5584AC" : "",
              borderRadius: "0 5px 5px 0 ",
            },
            labelbtn
          )}
          className="button b3"
          variant="outlined"
          onClick={() => {
            if (advEnabled) setAdvEnabled(false);
            else
              setpopup({
                val: true,
                obj: (
                  <AdvancePopup
                    setpopup={setpopup}
                    setAdvEnabled={setAdvEnabled}
                    changeAdvanceSearch={changeAdvanceSearch}
                  />
                ),
              });
          }}
        >
          Advance Search
        </Button>
        <Button
          sx={{
            width: "4vw",
            height: "6vh",
            marginTop: "29px",

            marginLeft: "1px",
          }}
          variant="outlined"
        >
          <RefreshIcon
            sx={{
              color: "blue",
              marginLeft: "0",
              paddingLeft: "0px",
            }}
            onClick={() => {
              setKey(Math.random());
            }}
          />
        </Button>
        <Input
          type="number"
          onChange={(e) => {
            customSearchVal = e.target.value;
            if (val !== "" && customSearchVal === "") {
              setval("");
            }
          }}
          onKeyDown={(e) => {
            if (e.which == 13) {
              if (customSearchVal.length > 0) {
                setval(customSearchVal);
              }
            }
          }}
          sx={{
            height: "8vh",
            width: "15vw",
            border: "2px solid black",
            marginLeft: "1.5%",
            marginTop: "4.6vh",
            marginRight: "2%",
            marginBottom: "3vh",
            borderRadius: "8px",

            paddingLeft: 1.2,
            backgroundColor: "white",
          }}
          id="filled-basic"
          placeholder="Search Customer Id"
          variant="filled"
        />

        <Button
          sx={Object.assign({ borderRadius: "5px 0 0 5px" }, labelbtn)}
          className="button b4"
          onClick={() => {
            setpopup({ val: true, obj: <AddPopup setpopup={setpopup} /> });
          }}
          variant="outlined"
        >
          Add
        </Button>
        <Button
          sx={labelbtn}
          className="button b5"
          disabled={selectedRows.length == 0}
          onClick={() => {
            setpopup({
              val: true,
              obj: (
                <EditPopup setpopup={setpopup} selectedRows={selectedRows} />
              ),
            });
          }}
          variant="outlined"
        >
          Edit
        </Button>
        <Button
          sx={Object.assign({ borderRadius: "0 5px 5px 0 " }, labelbtn)}
          className=" button b6"
          variant="outlined"
          onClick={() => {
            setpopup({
              val: true,
              obj: (
                <DeletePopup setpopup={setpopup} selectedRows={selectedRows} />
              ),
            });
          }}
        >
          Delete
        </Button>
      </Stack>
    </>
  );
}
