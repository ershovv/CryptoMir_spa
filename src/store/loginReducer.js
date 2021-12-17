const defaultState = {
	isAuth: false,
	name:	""
}
export const loginReducer = (state = defaultState, action) => {
	switch (action.type) {

		case "LOG_OUT":
			return {...state, isAuth: false}

		case "LOG_IN":
			return {...state, isAuth: true, name: action.name}

		default:
			return state
	}
}

