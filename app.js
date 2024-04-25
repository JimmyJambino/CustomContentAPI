import "dotenv/config"
import express from "express"
import session from "express-session"

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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(PORT)
})