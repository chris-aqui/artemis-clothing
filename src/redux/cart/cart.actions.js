import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
	// no payload passed as it's not used in reducer
});

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});
