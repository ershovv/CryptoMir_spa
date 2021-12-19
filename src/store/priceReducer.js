
const defaultState = {
	data: undefined,
	track_name: undefined,
	track_id: undefined,
	history: []
}

export const priceReducer = (state = defaultState, action) => {
	switch (action.type) {

		case "UPDATE":
			return {...state, data: action.data, history: [...state.history, action.data]}

		case "CHOOSE_COIN":
			return {...state, track_name: action.name, track_id: action.id}

		case "GET_PRICE":
		{
			return {...state, history: state.history}
		}

		default:
			return state
	}
}