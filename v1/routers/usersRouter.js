import { Router } from "express"
import {UserRepository} from "../database/mongoDB/userRepository.js"

const router = Router()

router.get('/', async (req, res) => {
    try {
        const users = await UserRepository.getAll()
        res.status(201).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const user = await UserRepository.getById(req.params.userId)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = await UserRepository.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

export default router