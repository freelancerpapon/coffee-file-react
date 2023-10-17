import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Users = () => {

  const loadedUsers = useLoaderData()
  const [users,setUsers] = useState(loadedUsers)

const handleDelete = id =>{
fetch(`https://module-56-coffe-store-server-n5bssfvqh-papon-da-projects.vercel.app/user${id}`,{
  method: 'DELETE'

})
.then(res => res.json())
.then(data =>{
  if(data.deletedCount > 0){
    console.log('delete confirm');
// remove the user form ui
    const remainingUser = users.filter(user => user._id !== id)
    setUsers(remainingUser)
  }
})
}

  return (

    <div>
      <Header></Header>
      <h2 className="text-xl">Users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Id</th>
        <th>Email</th>
        <th>created Time</th>
        <th>Last Logged In</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
          <th>1</th>
          <td>{user?._id}</td>
          <td>{user?.email}</td>
          <td>{user?.createdAt}</td>
          <td>{user.lastLoginAt}</td>
          <td>
            <button onClick={()=> handleDelete(user._id)} className="btn">X</button>
          </td>
        </tr> )
      }

    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;