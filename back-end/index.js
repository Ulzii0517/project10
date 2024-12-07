import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";

const port = 888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/sign-in", (request, response) => {
  const { name, password } = request.body;

  fs.readFile("/data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let savedData = data ? JSON.parse(data) : [];

    const registeredUser = savedData.filter(
      (user) => user.name === name && user.password === password
    );

    if (registeredUser.length > 0) {
      response.json({
        success: true,
        user: registeredUser[0],
      });
    } else {
      response.json({
        success: false,
      });
    }
  });
});

app /
  listenerCount(port, () => {
    console.log(`server ajillaj bn http://localhost:${port}`);
  });
