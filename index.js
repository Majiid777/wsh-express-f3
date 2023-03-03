const express = require("express");

var app = express();
// app.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });
//
// app.get("/students", (req, res) => {
//     res.send(students);
//   });
// app.get("/students/:id", (req, res) => {
//   res.send(students.filter((el) => el.id == req.params.id));
// });

// const requestTime = function (req, res, next) {
//   const time = new Date();
//   const hour = time.getHours();
//   const day = time.getDay();
//   if (hour >= 9 && hour <= 17 && day >= 1 && day <= 5) {
//     // res.send(
//     //   hi everyone it is ${hour} in tunisia, what a beautiful  rainy ${day}
//     // );
//     next();
//   } else {j
//     res.send("we are not working today");
//   }

// };

PORT = process.env.PORT || 4000;





// app.listen(PORT, (err) =>
// err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
// );


app.use((req, res, next) => {
    const time = new Date();
    const hour = time.getHours();
    const day = time.getDay();
    if (hour > 9 && hour < 17 && day >0 && day < 6) {
    
        // res.send(`<p>${time}</p>`);
      
        next();
    } else {
      res.send(
        "<h1> Sorry customer we are not working today you can check our scedule to see our opening times</h1>"
      );
    }
  });
  
  app.use(express.static("page"));
  app.listen(PORT, (error) =>
    error
      ? console.log(error)
      : console.log(`the server is runing in the port a ${PORT}`)
  );