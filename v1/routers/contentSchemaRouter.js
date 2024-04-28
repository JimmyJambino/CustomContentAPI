import { Router } from 'express'
import {ContentSchemaRepository} from '../database/mongoDB/contentSchemaRepository.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const contentSchema = await ContentSchemaRepository.getAll()
        res.status(201).json(contentSchema)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

router.get('/:contentId', async (req, res) => {
    try {
        const contentSchema = await ContentSchemaRepository.getById(req.params.contentId)
        res.status(201).json(JSON.parse(contentSchema.schema))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newContentSchema = await ContentSchemaRepository.create(req.body)
        res.status(201).json(JSON.parse(newContentSchema.schema))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.put('/:contentSchemaId', async (req, res) => {
    try {
       const updatedContentSchema = await ContentSchemaRepository.update(req.params.contentSchemaId, req.body)
       res.status(200).json(updatedContentSchema);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router