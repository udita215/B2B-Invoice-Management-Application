import { useEffect, useState } from "react";
import { DataGrid, GridColumnsPanel } from "@mui/x-data-grid";
import * as React from "react";
import axios from "axios";


const columns = [
    { field: "sl_no", headerName: "Sl No", width: 70 },
    { field: "business_code", headerName: "Business Code", width: 130 },
    { field: "cust_number", headerName: "Customer Num", width: 130 },
    { field: "clear_date", headerName: "Clear Date", width: 130 },
    { field: "buisness_year", headerName: "Business Year", width: 130 },
    { field: "doc_id", headerName: "Document Id", width: 130 },
    { field: "posting_date", headerName: "Posting Date", width: 130 },
    {
      field: "document_create_date",
      headerName: "Documnent Create Date",
      width: 130,
    },
    {
      field: "document_create_date1",
      headerName: "Document Create Date1",
      width: 130,
    },
    { field: "due_in_date", headerName: "Due Date", width: 130 },
    { field: "invoice_currency", headerName: "Invoice Currency", width: 130 },
    { field: "document_type", headerName: "Document Type", width: 130 },
    { field: "posting_id", headerName: "Posting Id", width: 130 },
    { field: "total_open_amount", headerName: "Total Open Amount", width: 130 },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      width: 130,
    },
    { field: "cust_payment_terms", headerName: "Cust_payment_terms", width: 130 },
    { field: "invoice_id", headerName: "Invoice Id", width: 130 },
    { field: "isOpen", headerName: "Is Open", width: 130 },
  ];




export function AdvanSearchGrid({val, selectedRows, selectRow, params}) {
    const [data, setData] = React.useState([]);


    React.useEffect(() => {
      console.log(params);
        const search = async (paramters) => {
          try {
            let response = await axios.get(
              "http://localhost:8080/HRC_INTERNSHIP/AdvanceSearch",
              {
                params:params
    
              }
            );
      
            let data = response.data;
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
        search();
      }, []);

      const [currPage, setCurrPage] = useState(100);
      console.log(currPage);
    
      return (
        <>
          <div style={{ height: 370, width: "100%" }}>
            <DataGrid
              sx={{
                "& .MuiToolbar-root": {
                  color: "white",
                },
                border: "none",
                backgroundColor: "#293C4A",
                color: "white",
                "& .MuiDataGrid-columnSeparator--sideRight": {
                  display: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  color: "white",
                  width: "99vw",
                  textOverflow: "clip",
                  whiteSpace: "break-spaces",
                  lineHeight: 1,
                },
              }}
              rows={data}
              columns={columns}
              
    
              getRowId={(row) => row.sl_no}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              checkboxSelection
    
              
            />
          </div>
        </>
      );
    }

export default AdvanSearchGrid;





