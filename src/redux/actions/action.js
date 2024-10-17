export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload: item
    }
}

export const DELETE=(id)=>{
    return{
        type:"REMOVE_CART",
        payload: id
    }
}

export const DEC=(item)=>{
    return{
        type:"DEC_CART",
        payload: item
    }
}