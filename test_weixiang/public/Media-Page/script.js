async function getData(link) {
  try {
    let response = await fetch(link); // Fetch data from our link
    let data = await response.json(); // Parses json and converts it to js object
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function appendPosts(link) {
  const data = await getData(link);
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-container");

  const table = document.createElement("table");

  // Create table header
  const headerRow = document.createElement("tr");
  const headerFields = ["Name", "Username", "Email", "Website"];
  headerFields.forEach((field) => {
    const th = document.createElement("th");
    th.textContent = field;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create table rows
  data.forEach((item) => {
    const row = document.createElement("tr");
    const fields = ["name", "username", "email", "website"];
    fields.forEach((field) => {
      const cell = document.createElement("td");
      cell.textContent = item[field];
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  tableContainer.appendChild(table);
  document.body.appendChild(tableContainer);
}

appendPosts("https://jsonplaceholder.typicode.com/users");
