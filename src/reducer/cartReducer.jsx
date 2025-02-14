const cartReducer = (state, action) => {
    const {type, payload} = action;


    // Implement logic to handle different types of actions here

    switch (type) {
        case "ADD_TO_CART":
            return {...state, CartList : payload.products}


        case "REMOVE_FROM_CART":
            return {...state, CartList : payload.products}
            
        case "UPDATE_CART_QUANTITY":
            return {...state, CartList : payload.total}
            
        default:
            throw new Error("No Case Found In CartReducer");
    }
 
}

export default cartReducer