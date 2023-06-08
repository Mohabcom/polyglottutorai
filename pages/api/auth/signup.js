import { mongooseConnect } from '@/lib/mongoose';
import { User } from '@/models/User';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();

    if (method === 'POST') {
        const { username, email, password } = req.body;
        if (username && email && password) {
            const checkExisting = await User.findOne({
                email,
                provider: 'credentials',
            });
            if (checkExisting) {
                return res.status(422).json({ message: 'User Already Exists' });
            } else {
                try {
                    const user = await User.create({
                        username,
                        email,
                        password: await hash(password, 12),
                        provider: 'credentials',
                    });
                    res.status(201).json({ status: true, user });
                } catch (error) {
                    return res.status(404).json({ error });
                }
            }
        } else {
            return res.status(404).json({ message: 'Form data not valid.' });
        }
    } else {
        return res.status(500).json({ message: 'HTTP method not valid.' });
    }
}
