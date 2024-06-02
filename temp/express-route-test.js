import request from "supertest";
import express from "express";
import router from "../routes/main.js";

const app = new express();
app.use("/", router);

describe("Good Home Routes", function () {
  it("responds to /", async () => {
    const res = await request(app).get("/");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("hello world!");
  });

  it("responds to /hello/:name", async () => {
    const res = await request(app).get("/hello/jaxnode");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("hello jaxnode!");
  });

  it("responds to /hello/Annie", async () => {
    const res = await request(app).get("/hello/Annie");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("hello Annie!");
  });
});
