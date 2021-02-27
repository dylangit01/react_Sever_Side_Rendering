import { FETCH_USERS } from "../actions";

export default (users=[], action) => {
	switch (action.type) {
		case FETCH_USERS:
			return action.payload.data
		
		default:
			return users
	}
}