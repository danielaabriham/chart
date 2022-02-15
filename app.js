const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      name: "Temperature",
      type: "bar",
      values: [3, 2, 5, 7, 10, 12, 14, 15, 12, 10, 5, 4],
    },
  ],
};

const chart = new frappe.Chart("#chart", {
    title: "Daily mean temperature in 2021 in UK(degrees C)",
    data: data,
    type: 'bar',
    height: 250, 
    colors: ['#7cd6fd']
})