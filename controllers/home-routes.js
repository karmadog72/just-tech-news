const router = require("express").Router();

router.get("/post/:id", (req, res) => {
  const post = {
    id: 1,
    post_url: "https://handlebarsjs.com/guide/",
    title: "Handlebars Docs",
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: "test_user",
    },
  };

  res.render("single-post", { post });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
