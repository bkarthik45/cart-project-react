const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (ItemIndex >= 0) {
                // Increment quantity if item exists
                return {
                    ...state,
                    carts: state.carts.map((item, index) =>
                        index === ItemIndex ? { ...item, qnty: item.qnty + 1 } : item
                    ),
                };
            } else {
                // Add item if not already in the cart
                const temp = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    carts: [...state.carts, temp],
                };
            }

        case "REMOVE_CART":
            // Filter out the item with matching id
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            return {
                ...state,
                carts: data,
            };

        case "DEC_CART":
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if (ItemIndex_dec >= 0 && state.carts[ItemIndex_dec].qnty > 1) {
                // Decrement quantity if more than 1
                return {
                    ...state,
                    carts: state.carts.map((item, index) =>
                        index === ItemIndex_dec ? { ...item, qnty: item.qnty - 1 } : item
                    ),
                };
            } else if (ItemIndex_dec >= 0 && state.carts[ItemIndex_dec].qnty === 1) {
                // Remove item if quantity is 1
                return {
                    ...state,
                    carts: state.carts.filter((item) => item.id !== action.payload.id),
                };
            }
            return state;

        default:
            return state;
    }
};
