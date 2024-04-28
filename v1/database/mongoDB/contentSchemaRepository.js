import {ContentSchema} from '../../models/contentSchema.js'

class ContentSchemaRepositoryClass {
    async create(contentSchemaData) {
        try {
            contentSchemaData.schema = JSON.stringify(contentSchemaData.schema)
            const newContentSchema = new ContentSchema(contentSchemaData)
            await newContentSchema.save()
            return newContentSchema
        } catch (error) {
            throw error
        }
    }

    async getAll() {
        try {
            return await ContentSchema.find({})
        } catch (error) {
            throw error
        }
    }

    async getById(contentSchemaId) {
        try {
            return await ContentSchema.findById(contentSchemaId)
        } catch (error) {
            throw error
        }
    }

    async update(contentSchemaId, updatedContentSchemaData) {
        try {
            updatedContentSchemaData.schema = JSON.stringify(updatedContentSchemaData.schema)
            return await ContentSchema.findByIdAndUpdate(contentSchemaId, updatedContentSchemaData, { new: true })
        } catch (error) {
            throw error
        }
    }

    async remove(contentSchemaId) {
        try {
            return await ContentSchema.findByIdAndDelete(contentSchemaId)
        } catch (error) {
            throw error
        }
    }
}

export const ContentSchemaRepository = new ContentSchemaRepositoryClass()
