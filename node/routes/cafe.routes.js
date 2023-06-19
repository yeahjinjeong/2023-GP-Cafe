module.exports = app =>{
    const cafes = require("../controllers/cafe.controller.js");

    app.get("/cafe", cafes.findAll);
    app.get("/brunch", cafes.findBrunch);
    app.get("/coffee", cafes.findCoffee);
    app.get("/tea", cafes.findTea);
    app.get("/dessert", cafes.findDessert);
    app.get("/vegan", cafes.findVegan);
    app.get("/study", cafes.findStudy);
    app.get("/team", cafes.findTeam);
    app.get("/large", cafes.findLarge);
    app.get("/chat", cafes.findChat);
    app.get("/child", cafes.findChild);
    app.get("/senior", cafes.findSenior);
    app.get("/party", cafes.findParty);
    app.get("/sns", cafes.findSns);
    app.get("/rest", cafes.findRest);
    app.get("/theme", cafes.findTheme);
}