const app = require("./routers/router");
require("./DB/DB");

const PORT = process.env.PORT || 5000;
const HOST = "localhost" || "5.29.16.30/32";
const bodyParser = require("body-parser");
const path = require("path");

// connectDB();

//DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "..", "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
};

app.listen(PORT, () => {
  console.log(`shut up start on port: ${PORT}`);
});
console.log(process.env.PORT);