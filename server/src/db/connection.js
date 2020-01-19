import {schema as userScheme} from './userScheme.js'
import {schema as burgerScheme} from './burgersScheme.js';
import {schema as ordersScheme} from './ordersScheme.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/site', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we\'re connected!');
});

export const userDb = mongoose.model('userDb', userScheme);
export const burgerDb = mongoose.model('burgerDb', burgerScheme);
export const ordersDb = mongoose.model('ordersDb', ordersScheme);