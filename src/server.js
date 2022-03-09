import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

  app.get("/", (req, res) => res.send("<h1>Home</h1>"));
  app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);