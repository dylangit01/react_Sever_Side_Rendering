import axios from 'axios'

const URL = 'https://react-ssr-api.herokuapp.com/users'

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(URL)
  console.log(res);
  dispatch({ type: FETCH_USERS, payload: res })
}
