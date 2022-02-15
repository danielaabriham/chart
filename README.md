
#### Chart information
- https://www.carbonbrief.org/met-office-a-review-of-the-uks-climate-in-2021

#### Frappe Charts 

[More Frappe Charts Github info](https://github.com/frappe/charts)

##### Install via npm

```
$ npm install frappe-charts

```

##### Usage 

```
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
```

#### start-server-and-test

[More start-server-and-test Github info](https://github.com/bahmutov/start-server-and-test)

##### Install via npm

```
npm install --save-dev start-server-and-test
```

##### Usage

This command is meant to be used with NPM script commands. If you have a "start server", and "test" script names for example, you can start the server, wait for a url to respond, then run tests. When the test process exits, the server is shut down.

```
 "scripts": {
    "start": "parcel server index.html",
    "cy:open": "cypress open",
    "dev": "start-test 1234 cy:open"
  },
```

#### Run Charts GUI

```
npm run dev
```
