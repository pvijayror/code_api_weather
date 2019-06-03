
export function getView(data) {
    return {
        type: 'VIEW',
        view: data
    }
}

export function errorResponse(error)  {
    return {
        type: 'VIEW_ERROR',
        error
    }
}

export function fetchView(section) {
    const url = 'https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22'
    return dispatch => {
        return fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getView(data)))
            .catch(err => dispatch(errorResponse(err)))
    }
}