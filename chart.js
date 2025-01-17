async function getData() {
  const response = await  fetch("sample.csv");
  const data = await response.text();
  const rows = data.split("\n").slice(1);
  rows.forEach((elem) => {
            const row = elem.split(",");
            const year = row[0];
            const temp = row[1];
            console.log(year, temp);
          });
        }
