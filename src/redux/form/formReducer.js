const initialState = {
    data: [],
    error: "",
    loading: false
}
const formReducer = (state= initialState, action) => {
        switch(action.type) {
            case "GET_DATA": {
                return{
                    ...state,
                    loading: true
                }
            }
            case "GET_SUCCCESS": {
                return{
                    loading: false, 
                    data: action.payload        
                }
            }
            case "GET_ERROR": {
                return{
                    loading: false,
                    data: [],
                    error: action.payload
                }
            }
            default: {return state}
        }
}

export default formReducer;