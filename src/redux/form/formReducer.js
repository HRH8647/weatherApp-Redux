const initialState = {
    data: null,
    error: null,
    loading: false
}
const formReducer = (state= initialState, action) => {
        switch(action.type) {
            case "GET_DATA": {
                return{
                    ...state
                }
            }
            case "GET_SUCCCESS": {
                return{
                    ...state,
                    data: action.payload        
                }
            }
            case "GET_ERROR": {
                return{
                    data: [],
                    error: action.payload
                }
            }
            default: {return state}
        }
}

export default formReducer;