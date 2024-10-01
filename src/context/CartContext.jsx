import React, {  createContext, useContext, useReducer } from 'react'
import { sumProducts } from '../helper/helper';

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    total : 0 ,
    cheackout : false
};

const reducer = (state , actions) => {
    console.log(state)
switch (actions.type) {
    case "ADD_ITEM":
        if(!state.selectedItems.find((item) => item.id === actions.payload.id))
            state.selectedItems.push({...actions.payload ,quantity:1})
        return {
            ...state,
            cheackout : false,
            ...sumProducts(state.selectedItems)
        }
        
       

    default:
       throw new Error("invalid action")
}
};


const CartContex = createContext();

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContex.Provider value={{state , dispatch}}>
            {children}
        </CartContex.Provider>
    )
    
}

const useCart = () => {
  const {state , dispatch} =  useContext(CartContex)
  return [state , dispatch]
};

export default CartProvider;
export {useCart}