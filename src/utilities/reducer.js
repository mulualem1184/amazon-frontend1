import {Type} from './actiontype'
export const initialize={
    basket: [],
    user:null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            const existingItem=state.basket.find((item)=>item.id===action.item.id)
            if(!existingItem){
                return {
                    ...state,
                    basket: [...state.basket,{...action.item,amount:1}]
                }

                }else {
                    const updateBasket=state.basket.map((item)=>{
                        return item.id===action.item.id? {...item, amount: item.amount + 1}:item})
                        return{
                            ...state, basket:updateBasket
                        }
                
            }
            
        // return {
            //     ...state,
            //     basket: [...state.basket, action.item],
            // };
            case Type.REMOVE_FROM_BASKET:
                const index = state.basket.findIndex(item => item.id === action.id); // Find the item by ID
                let newBasket = [...state.basket]; // Create a shallow copy of the basket array
            
                if (index >= 0) {
                    if (newBasket[index].amount > 1) {
                        // If the item's amount is greater than 1, decrement the amount
                        newBasket[index] = {
                            ...newBasket[index],
                            amount: newBasket[index].amount - 1,
                        };
                    } else {
                        // If the item's amount is 1, remove it from the basket
                        newBasket.splice(index, 1);
                    }
                } else {
                    console.warn(`Cannot remove item (id: ${action.id}) as it is not in the basket`);
                }
            
                return {
                    ...state,
                    basket: newBasket,
                };
        case Type.SET_USER:
            return{
                ...state,user:action.user,
            }
        case Type.EMPTY_BASKET:
            return{
                ...state,
                basket: [],            }     
            
        default:
            return state; // Always return the current state for unhandled actions
    }
};