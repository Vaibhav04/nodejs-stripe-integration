module.exports = function(app) {
     // Importing routes
     const homeRoutes = require("./home")
     const errorRoutes = require("./not-found");

     // Using routes
     app.use("/", homeRoutes);

     // Invalid route
     app.use("*", errorRoutes);

}