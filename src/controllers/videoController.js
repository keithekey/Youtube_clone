import Video from "../models/Video";

export const home = async (req, res) =>  {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
}
export const watch = async (req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if(video) {
        return res.render("watch", { pageTitle: video.title, video });
    }
    return res.render("404", { pageTitle: "Video not found" });
}
export const getEdit = async (req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if(!video) {
        return res.render("404", { pageTitle: "Video not found" });
    }
    return res.render("edit", { pageTitle: "Editing Video", video });
}
export const postEdit = (req, res) => {
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
}
export const postUpload = async (req, res) => {
    try{
        const { title, description, hashtags } = req.body;
        const video = new Video({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => `#${word}`)
        });
        await video.save();
        return res.redirect("/");
    } catch(error) {
        console.log(error);
        return res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message });
    }
}