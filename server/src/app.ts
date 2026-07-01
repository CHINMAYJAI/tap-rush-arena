import express, { type Express, type Response } from "express";

export const app: Express = express();

// body parser middleware
app.use(express.json());

// health route setup
app.get("/", function (_, res: Response) {
    res.redirect("/health");
});

app.get("/health", function (_, res: Response) {
    res.json({ message: "Server is running" });
});
