const initialState = {
    loading: true,
    episodes: "",
    error: "",
    // list:""
    
};

 const EpReducer = ( state=initialState, action )=> {
    switch (action.type) {
        case "FETCH_EP_REQ":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_EP_SUC":
            return {
                loading: false,
                episodes: action.payload,
                error: "",
                // list:[]
            };
        case "FETCH_EP_FAIL":
            return {
                loading: false,
                episodes: [],
                error: action.payload,
                // list:[]
            };
        
        // case "ADD_LIST":
        //     return {
        //         list:[...state.list, action.payload]
        //     }
        
        default:
            return state;
  }  
} 

export default EpReducer;