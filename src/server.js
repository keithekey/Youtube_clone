import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>Welcome!</h1>");
}

const handleAbout = (req, res) => {
    return res.send("<font color='0000FF'>My name is Jeongwoo. Nice to meet you!</font>");
}

const handleContact = (req, res) => {
    return res.send("If you have any question, please contact to <a href=''>keithey@outlook.com</a>");
}

const handleLogin = (req, res) => {
    return res.send("<b>This is login page.</b>");
}

app.get("/",  handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);