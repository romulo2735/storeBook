import express from "express";
import routerBook from "./bookRoutes.js";

const  routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Hello World!");
    });

    app.use(express.json(), routerBook);
};

export default routes;