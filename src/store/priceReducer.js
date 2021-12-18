const defaultState = {
	data: undefined
}

export const priceReducer = (state = defaultState, action) => {
	switch (action.type) {

		case "UPDATE":
			return {...state, data: action.data}

		default:
			return state
	}
}