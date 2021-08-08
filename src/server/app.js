import express from "express";
import bodyParser from "body-parser";
import path from "path";

import {loadConfig, createRoutes, db} from "./database";

async function init() {
    const app = express();

    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, "../../dist")));
    app.use(express.static("public"));


    loadConfig()
    await db.setUpConnection();

    app.use(createRoutes());

    app.listen(process.env.PORT, () => {
        console.log(`server works on port: ${process.env.PORT}`)
    });
}

init().catch(console.log);