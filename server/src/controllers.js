import Boom from '@hapi/boom';
import {userDb, burgerDb, ordersDb} from './db/connection.js';
import bcrypt from 'bcryptjs';

const Module = {
    validationFailErr: async (request, h, err) => {
        if (err.message.includes('password')) {
            err.modifyMessage = 'Required password must be 6 to 15 characters and contain at least one numeric digit and letter';
            return Boom.badRequest(err.modifyMessage);
        }
        if (err.message.includes('empty')) {
            err.modifyMessage = 'Field\'s can\'t be empty';
            return Boom.badRequest(err.modifyMessage);
        } else if (err.message.includes('pattern')) {
            err.modifyMessage = 'Please check on valid your input data';
            return Boom.badRequest(err.modifyMessage);
        } else {
            return Boom.badRequest(err);
        }
    },

    createUser: async function (req, h) {
        const userForRegistry = await userDb.findOne({email: req.payload.email});
        if (userForRegistry) {
            return Boom.badRequest('User with this e-mail already registered. Try to log in')
        } else {
            const hashedPassword = await bcrypt.hash(req.payload.password, 10);
            const newUser = await userDb.create({
                email: req.payload.email,
                password: hashedPassword
            });
            return {
                idToken: newUser.token,
                LocalId: newUser.userId,
                userEmail: newUser.email
            }
        }
    },
    loginUser: async function (req, h) {
        const email = req.payload.email;
        const userPassword = req.payload.password;

        const userFromDbWithLogin = await userDb.findOne({email: email});

        if (!userFromDbWithLogin) {
            return Boom.badRequest('User with this email doesn\'t exist.');
        }
        try {
            if (await bcrypt.compare(userPassword, userFromDbWithLogin.password)) {
                return {
                    idToken: userFromDbWithLogin.token,
                    LocalId: userFromDbWithLogin.userId,
                    userEmail: userFromDbWithLogin.email
                }
            } else {
                return Boom.badRequest('Wrong password');
            }
        } catch (e) {
            return Boom.badRequest('Ошибка при входе в систему');
        }
    },

    initIngredients: async function (req, h) {
        return burgerDb.findOne({name: 'base'});
    },

    initBurgers: async function (req, h) {
        return burgerDb.find({});
    },
    createOrder: async function (req, h) {
        const newOrder = await ordersDb.create({
            ingredients: req.payload.orderSummary.ingredients,
            totalPrice: req.payload.orderSummary.totalPrice,
            orderData: req.payload.orderSummary.orderData,
            userId: req.payload.orderSummary.userId
        });
        return newOrder;
    },

    showOrders: async function (req, h) {
        const userId = req.auth.credentials.userId;
        let userOrders = '';

        if (req.auth.strategy === 'user') {
            userOrders = ordersDb.find({userId});
        }

        if (req.auth.strategy === 'admin') {
            userOrders = ordersDb.find();
        }

        return userOrders
    },

    deleteOrder: async function (req, h) {
        console.log(req.payload);
        if (req.auth.strategy === 'admin') {
            const orderId = req.payload.orderId;
            const orderForDelete = await ordersDb.findById(orderId);
            if (orderForDelete) {
                orderForDelete.delete();
                return ('Order deleted successfully')
            }
            return Boom.badRequest('Order not found');
        } else {
            return Boom.forbidden('You can not delete any orders');
        }
    }
}

export default Module;