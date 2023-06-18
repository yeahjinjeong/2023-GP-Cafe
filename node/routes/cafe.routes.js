module.exports = app =>{
    const cafes = require("../controllers/cafe.controller.js");

    app.get("/cafe", cafes.findAll);
    app.get("/class", cafes.findCoffee);
}