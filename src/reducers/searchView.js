const initialState = {
    view: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case 'SEARCH_VIEW':
            console.log("reducer.....");
            return {
                ...state,
                view: action.view
            }

        default:
            return state;    

    }
}