import jwt from "jsonwebtoken";
import "dotenv/config";

const AuthController = {
  login,
  validateJWT,
};

const secretForToken = process.env.TOKEN_SECRET;

async function login() {
  console.log("Login");
  // TODO Create collection in MongoDB for users + schema

  // User Is Valid
  const MOCK_USER_DATA = {
    username: "john_smith",
    name: "John Smith",
    avatar: '<img src="" alt="test"/>',
  };

  const isValid = true;

  if (!isValid) {
    throw new Error("The username or password entered is not correct");
  }

  const token = jwt.sign(
    {
      data: MOCK_USER_DATA,
    },
    secretForToken,
    { expiresIn: "1h" }
  );

  return token;
}

function validateJWT(token) {
  try {
    let isAuthenticated = false;

    jwt.verify(token, secretForToken, (err, _decoded) => {
      if (err) {
        throw new Error(err);
      }

      isAuthenticated = true;
    });

    return isAuthenticated;
  } catch (err) {
    console.error(err);
  }
}

export default AuthController;
