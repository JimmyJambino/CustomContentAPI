import "dotenv/config"
import express from "express"
import session from "express-session"
import usersRouter from "./v1/routers/usersRouter.js"
import {connectDB} from "./v1/database/mongoDB/createConnection.js"

const app = express()
app.use(express.json())

const sessionMiddleware = session({
    name: "session",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
		httpOnly: true,
		secure: false,
        sameSite: true
	}
})

app.use(express.json())
app.use(sessionMiddleware)

connectDB(process.env.DATABASE_NAME)

app.use("/v1/users", usersRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(PORT)
})