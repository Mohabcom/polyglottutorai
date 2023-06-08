import { mongoose } from 'mongoose';

const { Schema, model, models } = require('mongoose');

const UserSchema = new Schema({
    provider: { type: String },
    username: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    image: { type: String },
    emailVerified: { type: Boolean, default: false },
    conversations: [
        {
            conversationId: {
                type: mongoose.Types.ObjectId,
                ref: 'Conversation',
            },
            language: { type: String, ref: 'Conversation' },
            _id: false,
        },
    ],
});

export const User = models.User || model('User', UserSchema);
