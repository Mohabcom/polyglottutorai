import { mongoose } from 'mongoose';

const { Schema, model, models } = require('mongoose');

const ConversationSchema = new Schema({
    language: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    messages: [
        {
            role: { type: String },
            content: { type: String },
            _id: false,
        },
    ],
    expireAt: {
        type: Date,
        index: { expires: '1m' },
        default: Date.now() + 1 * 60 * 1000,
    },
});

export const Conversation =
    models.Conversation || model('Conversation', ConversationSchema);
