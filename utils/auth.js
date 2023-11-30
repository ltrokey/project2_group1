const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    console.log("User not authenticated. Redirecting to login.");
    res.redirect("/login");
  } else {
    console.log("User authenticated. Proceeding to next middleware.");
    next();
  }
};

module.exports = withAuth;
