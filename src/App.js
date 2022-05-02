import "./App.css";
import Header from "./Components/Header";
import { StyledEngineProvider } from "@mui/material/styles";
import ButtonsP from "./Components/ButtonsP";
import { Grid } from "@material-ui/core";
import Footer from "./Components/Footer";
import { GridData } from "./Components/GridData";
import { padding } from "@mui/system";
import React from "react";
import { getData } from "../src/Services/data";
import SearchGridData from "./Components/CustomSearchData";
import AdvanSearchGrid from "./Components/AdvanSearchGrid";
import RefreshIcon from '@mui/icons-material/Refresh';
function App() {
  const [data, setData] = React.useState([]);
 
  const [val, setval] = React.useState("");
  const [selectedRows, selectRow] = React.useState([]);
  const [advEnabled, setAdvEnabled] = React.useState(false);
  const [advanceSearch, setaSearch] = React.useState({});
  const [key,setKey]=React.useState(0);
  const changeAdvanceSearch = (obj) => {
    console.log(obj);
    setaSearch(obj);
  };
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header />

      <ButtonsP
        selectedRows={selectedRows}
        setval={setval}
        val={val}
        advEnabled={advEnabled}
        changeAdvanceSearch={changeAdvanceSearch}
        setAdvEnabled={setAdvEnabled}
        setKey={setKey}
      />

      {advEnabled ? (
        <AdvanSearchGrid params={advanceSearch}
        key={key} />
      ) : val === "" ? (
        <GridData
          data={data}
          setData={setData}
          selectRow={selectRow}
          selectedRows={selectedRows}
          key={key}
        />
      ) : (
        <SearchGridData val={val}
        key={key} />
      )}

      <Footer />
    </div>
  );
}

export default App;
