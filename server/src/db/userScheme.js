import mongoose from 'mongoose';
import uuidv4 from 'uuid/v4.js';

export const schema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            default: uuidv4
        },
        token: {
            type: String,
            default: uuidv4
        }
    },
    {
        timestamps: true
    }
);
