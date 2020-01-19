import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredientsAndPrice = (ingredients, totalPrice) => {
    return {
        type: actionTypes.SET_INGREDIENTS_AND_PRICE,
        ingredients: ingredients,
        totalPrice: totalPrice
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-3cb3b.firebaseio.com/burgerdbs.json')
            .then(response => {
                console.log(response.data);
                dispatch(setIngredientsAndPrice(response.data[3].ingredients, response.data[3].totalPrice))
            })
            .catch(err => {
                dispatch(fetchIngredientsFailed(err.response.data))
            })
    };
};