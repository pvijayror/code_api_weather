
export function getView(view) {
    return {
        type: 'SEARCH_VIEW',
        view
    }
}

export function errorResponse(error) {
    console.log(error)
    return {
        type: 'VIEW_ERROR',
        error
    }
}

export function fetchView(q) {
    console.log("fetch view", q)
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+q+'&api-key=A7Byis5MmEBe0Tt7cJr0m5xA6ItzMkWS'
    return dispatch => {
        return fetch(url)
                .then(res => res.json())
                .then(view => dispatch(getView(view)))
                .catch(err => dispatch(errorResponse(err)))
    }
}
