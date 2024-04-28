import { Router } from 'express'
import bcrypt, { compare } from "bcrypt"
import {UserRepository} from '../database/mongoDB/userRepository.js'

const router = Router()
const saltRounds = 12

router.get('/', async (req, res) => {
    try {
        const users = await UserRepository.getAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const user = await UserRepository.getById(req.params.userId)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
        req.body.password = hashedPassword
        const newUser = await UserRepository.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.post('/login', async (req, res) => {
    try {
        const password = req.body.password
        const email = req.body.email
        const user = await UserRepository.getByEmail(email)
        const isValidLogin = await compare(password, user.password)
        if (isValidLogin) {
            req.session.isLoggedIn = true
            req.session.userId = user._id
            console.log(req.session)
            res.status(200).json()
        } else {
            res.status(400).json( {error: "invalid_login"})
        }
    } catch (error) {
        res.status(400).json( {error: error.message})
    }
})

router.post('/logout', async (req, res) => {
    req.session.isLoggedIn = false
    res.status(200).json()
})

export default router