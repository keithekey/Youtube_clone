export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
    console.log(req.params);
    return res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req, res) => {
    console.log(req.params);
    return res.send("Edit Videos");
}
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
}