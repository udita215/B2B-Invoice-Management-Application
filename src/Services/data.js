import axios from "axios";

export const getData = async () => {
  let res = await axios.get(
    "http://localhost:8080/HRC_INTERNSHIP/FetchServlet"
  );
  console.log(res.data);
  res.data.map(
    (e) =>
      (e.clear_date =
        e.clear_date == null ? "0000-00-00" : formatDate(e.clear_date))
  );
  res.data.map(
    (e) =>
      (e.posting_date =
        e.posting_date == null ? "0000-00-00" : formatDate(e.posting_date))
  );
  res.data.map(
    (e) =>
      (e.document_create_date =
        e.document_create_date == null
          ? "0000-00-00"
          : formatDate(e.document_create_date))
  );
  res.data.map(
    (e) =>
      (e.document_create_date1 =
        e.document_create_date1 == null
          ? "0000-00-00"
          : formatDate(e.document_create_date1))
  );
  res.data.map(
    (e) =>
      (e.due_in_date =
        e.due_in_date == null ? "0000-00-00" : formatDate(e.due_in_date))
  );
  res.data.map(
    (e) =>
      (e.baseline_create_date =
        e.baseline_create_date == null
          ? "0000-00-00"
          : formatDate(e.baseline_create_date))
  );
  return res.data;
};

const formatDate = (date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};
