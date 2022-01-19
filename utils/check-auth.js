const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

// We could have done the way we did with the validators
// module.exports.checkAuth = (context) => {}
// and import "const {checkAuth} = require("../../utils/check-auth")"
// since we have only one function, this works

module.exports = (context) => {
  // context = { ...headers }
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer ...
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError("Token invalide ou expiré");
      }
    }
    throw new Error("Le token d'authentification doit être 'Bearer [token]'");
  }
  throw new Error("L'en-tête d'autorisation est introuvable");
};
