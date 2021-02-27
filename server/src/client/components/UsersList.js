import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { useDispatch } from 'react-redux'

const UsersList = () => {
  const dispatch = useDispatch()

	// const users = useSelector((state) => state.users)
	// console.log(users);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
			This is the UserList:
			{/* {users.map(user => (
				<ul>
					<li key={user.id}>{user.name}</li>
				</ul>
      ))} */}
    </div>
  )
}

export default UsersList
