import mongoose from 'mongoose';

export const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        ingredients: {
            type: Object,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    });