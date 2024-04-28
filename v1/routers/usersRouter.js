import { Router } from "express"
import {UserRepository} from "../database/mongoDB/userRepository.js"

const router = Router()

router.post('/', async (req, res) => {
    try {
        const newUser = await UserRepository.create(req.body)
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
export default router