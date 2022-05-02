
This paste expires on 2022-04-02 06:50:15.317064. Repaste, or download this paste. Toggle word wrap. Pasted through web.

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
	<!DOCTYPE html>
	<html>

	<head>
		<meta charset="ISO-8859-1">
		<title>LOL</title>

		<script>


			function createForm() {
				let e = [ {name: "doc_id"}, { name: "business_code" }, { name: "clear_date", type: "date" }, { name: "cust_number" }, { name: "buisness_year" }, { name: "posting_date", type: "date" },
				{ name: "document_create_date", type: "date" }, { name: "due_in_date", type: "date" }, { name: "invoice_currency" }, { name: "document_type" }, { name: "posting_id" },
				{ name: "total_open_amount" }, { name: "baseline_create_date", type: "date" }, { name: "cust_payment_terms" }, { name: "invoice_id" }]

				for (const entry of e) {
					console.log(entry);
					if (entry.type == undefined || entry.type == null) {
						document.getElementById('form').innerHTML += "<label for='" + entry.name + "'>" + entry.name + "</label> <br>" + "<input name='" + entry.name + "'/><br>"

					}

					else {
						document.getElementById('form').innerHTML += "<label for='" + entry.name + "'>" + entry.name + "</label> <br>" + "<input name='" + entry.name + "' type='" + entry.type + "'" + "/><br>"
					}

				}
				document.getElementById('form').innerHTML  += "<input type='submit'/>"
			}
			window.addEventListener('load', (event) => {
				createForm();

			});

		</script>


	</head>

	<body>
		<form id="form" method="GET" action='/HRC_INTERNSHIP/AddServlet'>

		</form>

	</body>

	</html>
Filename: None. Size: 2kb. View raw, copy, hex, or download this file.
View source code, the removal or expiry stories, or read the about page.

This website does not claim ownership of, copyright on, and assumes no liability for provided content. Toggle color scheme.