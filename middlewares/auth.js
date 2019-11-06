const bcrypt = require('bcryptjs');
const auth = {};

auth.comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
}

auth.loginRequired = (req, res, next) => {
  if (req.user === undefined) return res.json({ message: "You must be logged in to view this page" });
  return next();
}

module.exports = auth;