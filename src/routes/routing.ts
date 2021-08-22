import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("home");
});
routes.get("/anchovylovers", (req, res) => {
  res.render("anchovy");
});
routes.get("/paleo", (req, res) => {
  res.render("paleo");
});
routes.get("/dessert", (req, res) => {
  res.render("dessert");
});
routes.get("/review", (req, res) => {
  res.render("review");
});
routes.post("/thankyou", (req, res) => {
  const name = req.body.fullname;
  const comment = req.body.Comment;
  const rating = req.body.rating;
  // above is saving the things I want to save
  res.render("thankyou", { name, comment, rating });
  // one brace
  console.log(req.body);
});
routes.get("/custom", (req, res) => {
  res.render("custom");
});
export default routes;
