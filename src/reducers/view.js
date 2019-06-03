const initialState = {
    view: []
}

export function view(state = initialState, action ) {
    switch(action.type) {
        case 'VIEW':
            console.log("reducer.....");
            return {
                ...state,
                view: action.view
            }

        default:
            return state;    

    }
}