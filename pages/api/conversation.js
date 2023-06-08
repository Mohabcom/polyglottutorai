import { mongooseConnect } from '@/lib/mongoose';
import { Configuration, OpenAIApi } from 'openai';
import { Conversation } from '@/models/Conversation';
import { User } from '@/models/User';

// OPENAI
const config = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(config);

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();

    // Get Conversation/s
    if (method === 'GET') {
        if (req.query?.userid) {
            try {
                const userId = req.query?.userid;
                const userDoc = await User.findById(userId);
                return res.status(200).json(userDoc.conversations);
            } catch (error) {
                console.log(error);
            }
        }
        if (req.query?.id) {
            try {
                const id = req.query?.id;
                const conversation = await Conversation.findById(id);
                res.status(200).json(conversation);
            } catch (error) {
                console.log(error);
            }
        }
    }

    // Create New Conversation
    if (method === 'POST') {
        try {
            const { language, userId } = req.body;

            let messages = [
                {
                    role: 'system',
                    content: `Act as my friend that is great at speaking ${language} and have a conversation with me about different topics, correct me if I make a mistake and change the topic from time to time, speak ${language} only, start by saying hi`,
                },
            ];

            try {
                const completion = await openai.createChatCompletion({
                    model: 'gpt-3.5-turbo',
                    messages,
                });
                messages.push(completion.data.choices[0].message);
            } catch (error) {
                throw error;
            }

            const conversationDoc = await Conversation.create({
                language,
                userId,
                messages,
            });
            // Add conversation to user's conversations
            let conversationForUser = {
                conversationId: conversationDoc._id,
                language,
            };
            let updatedUser = await User.findById(userId);
            updatedUser.conversations.push(conversationForUser);
            await User.findByIdAndUpdate(userId, updatedUser);

            res.status(200).json(conversationDoc);
        } catch (error) {
            console.log(error);
        }
    }
    // Send Message
    if (method === 'PUT') {
        try {
            const id = req.query?.id;
            const { language, userId, messages } = req.body;
            try {
                const completion = await openai.createChatCompletion({
                    model: 'gpt-3.5-turbo',
                    messages,
                });
                messages.push(completion.data.choices[0].message);
            } catch (error) {
                throw error;
            }

            const conversation = await Conversation.findByIdAndUpdate(
                id,
                { language, userId, messages },
                { new: true },
            );
            res.status(200).json(conversation);
        } catch (error) {
            console.log(error);
        }
    }
    // Delete Conversation
    if (method === 'DELETE') {
        if (req.query?.id && req.query?.userid) {
            try {
                const userId = req.query?.userid;
                await Conversation.findOneAndDelete({
                    _id: req.query?.id,
                });
                let updatedUser = await User.findById(userId);
                const updatedConversations = updatedUser.conversations.filter(
                    ({ conversationId }) => {
                        conversationId != req.query?.id;
                    },
                );
                updatedUser.conversations = updatedConversations
                await User.findByIdAndUpdate(userId, updatedUser);
                res.status(200).json({ status: 'success' });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
