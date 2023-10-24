import express from "express"
import { engine } from "express-handlebars"
import * as path from "path"
import __dirname from "./utils.js"
import {Server} from "socket.io"
import { mongoDBConnection } from "./config/config.js"
//import cartsRouter from "./router/carts.routes.js"
//import messagesRouter from "./router/messages.routes.js"
import router from "../src/router/product.routes.js"
import uploadRouter from "../src/router/upload.routers.js"


const app = express()

//Se define puerto 8080 para ejecutar la aplicacion
const PORT = 8080

mongoDBConnection();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor Express Puerto ${PORT}`)
})


//app.use("/api/carts", cartsRouter)
//app.use("/api/message", messagesRouter)
app.use("/api/product", router)

app.use("/", uploadRouter) 

app.engine("handlebars", engine())

app.set("view engine", "handlebars")

app.set("views", path.resolve(__dirname + "/views"))

app.use("/", express.static(__dirname + "/public"))


app.get("/chat", async (req, res) => {
    res.render("chat", {
        title: "Chat con Mongoose",
    })
})

app.get("/multer", async (req, res) => {
    res.render("upload", {
        title: "Multer",
    })
})
