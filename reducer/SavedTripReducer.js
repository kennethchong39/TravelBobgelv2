import constant from '../contants'

const initialState = {
	savedTrips: [],
	currentTrip: {},
	editting: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case constant.SAVETRIP.FETCH_SAVED_TRIP:
			return {
				...state,
				savedTrips: action.payload,
			}
		case constant.SAVETRIP.FETCH_CHOSEN_TRIP:
			return {
				...state,
				editting: true,
				currentTrip: action.payload
			}
		default:
			return state
	}
}
