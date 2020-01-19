import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const setBurgers = (burgerDB) => {
    return {
        type: actionTypes.SET_MAIN_BURGERS,
        burgerDB: burgerDB,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_MAIN_BURGERS
    }
};

export const initBurgers = () => {
    return dispatch => {
        axios.get('https://react-my-burger-3cb3b.firebaseio.com/burgerdbs.json')
            .then(response => {
                dispatch(setBurgers(response.data))
            })
            .catch(err => {
                dispatch(fetchIngredientsFailed())
            })
    };
};