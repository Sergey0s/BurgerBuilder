import controllers from './controllers.js';
import Joi from '@hapi/joi';

const payloadValidateForBody = Joi.object({
    name: Joi.string()
        .min(2)
        .max(15)
        .required(),
    surname: Joi.string()
        .min(2)
        .max(10)
        .required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(/^[a-zA-Zа-яА-Я0-9]{6,30}$/)
        .required(),
    birthYear: Joi.number()
        .integer()
        .min(1900)
        .max(2013)
        .required(),
});


const Module = [
    {
        method: 'POST',
        path: '/auth',
        handler: controllers.createUser,
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string()
                        .pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                        .required(),
                    password: Joi.string()
                        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{5,15}$/)
                        .required()
                }).required(),
                failAction: controllers.validationFailErr
                }
            }
        },
    {
        method: 'POST',
        path: '/login',
        handler: controllers.loginUser,
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string()
                        .pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                        .required(),
                    password: Joi.string()
                        .pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{5,15}$/)
                        .required()
                }).required(),
                failAction: controllers.validationFailErr
            }
        }
    },
    {
        method: 'GET',
        path: '/ingredients',
        handler: controllers.initIngredients,
        options: {
        }
    },
    {
        method: 'GET',
        path: '/burgers',
        handler: controllers.initBurgers,
        options: {
        }
    },
    {
        method: 'POST',
        path: '/orders',
        handler: controllers.createOrder,
        options: {
        }
    },
    {
        method: 'GET',
        path: '/orders',
        handler: controllers.showOrders,
        options: {
            auth: {
                strategy: 'admin'
            }
        }
    },
    {
        method: 'POST',
        path: '/orders/delete',
        handler: controllers.deleteOrder,
        options: {
            auth: {
                strategy: 'admin'
            }
        }
    }
];

export default Module;


