import mongoose from 'mongoose'

const contentSchemaSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    schema: {
        type: String,
        required: true,
        unique: false
    }
});

contentSchemaSchema.index({ userId: 1, content: 1 }, { unique: true }) // Creates a compound unique key
// Create new schemas from collection with relation to users and object type, for custom entities, but also standard
// use JSON.stringify(object), JSON.parse(object)

export const ContentSchema = mongoose.model('ContentSchema', contentSchemaSchema);