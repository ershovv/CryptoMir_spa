
const defaultState = {
	data: undefined,
	track_name: undefined,
	track_id: undefined,
	history: []
}

export const priceReducer = (state = defaultState, action) => {
	switch (action.type) {

		case "UPDATE":
			const history_buf = state.history
			if (history_buf.length == 100)
			{
				history_buf.shift()
			}
			return {...state, data: action.data, history: [...history_buf, action.data]}

		case "CHOOSE_COIN":
			return {...state, track_name: action.name, track_id: action.id}

		case "GET_PRICE":
		{
			return {...state, history: state.history}
		}

		case "CLEAR":
			return  {...state, history: action.data}

		default:
			return state
	}
}