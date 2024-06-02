// npm run test:dev /__tests__/routes/auth.test.js
import request from "supertest";
import express from "express";
import authRouter from "../../routes/api/auth.js";
import { jest } from "@jest/globals";
import bodyParser from "body-parser";
import User from "../../models/user.js";
import mockingoose from "mockingoose";
import bcrypt from "bcrypt";

jest.mock("../../controller/authController.js", () => ({
  validateAuth: (_, __, next) => next(),
}));

// Trebuie sa suprascriem functiile bcrypt
const bcryptCompareMock = jest.fn();
bcrypt.compare = bcryptCompareMock;

// eslint-disable-next-line
const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);

process.env.TOKEN_SECRET = "secret";

describe("Auth Routes", function () {
  afterEach(() => {
    mockingoose(User).reset();
  });

  it("responds to /api/auth/login", async () => {
    // Pot modifica codul astfel incat sa tratez toate cazurile de eroare, modificand ce returneaza findOne
    bcryptCompareMock.mockResolvedValue(true);
    mockingoose(User)
      .toReturn(
        {
          email: "test@test.com",
          password: "parolaDinDbHashed",
          role: "buyer",
          avatarURL: "/public/avatar/image.png",
        },
        "findOne"
      )
      .toReturn(
        {
          email: "test@test.com",
        },
        "findOneAndUpdate"
      );

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@test.com",
        password: "parolaDinTest",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    // Răspunsul trebuie să aibă status code 200.
    expect(res.statusCode).toBe(200);
    // Răspunsul trebuie să returneze un token.
    // Nu ne intereseaza valoarea efectiva a JWT-ului
    expect(res.body).toHaveProperty("token");
    // Răspunsul trebuie să returneze un obiect user cu 3 câmpuri: email, role si avatarURL, cu valori de tip String.
    expect(res.body).toHaveProperty("user");
    expect(typeof res.body.user.email).toBe("string");
    // Verificam si ca rolul e fie "buyer", "fie seller"
    expect(["buyer", "seller"]).toContain(res.body.user.role);
    expect(typeof res.body.user.avatarURL).toBe("string");
  });
});
