import mongoose from 'mongoose';

export const schema = new mongoose.Schema({
        ingredients: {
            type: Object,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        orderData: {
            type: Object,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    });

