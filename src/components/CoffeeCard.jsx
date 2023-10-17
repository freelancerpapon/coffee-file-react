/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee ,coffees, setCoffees}) => {
  const {photo,details,category,taste,supplier,quantity,name,_id} = coffee;

  const handleDelete = _id =>{
console.log(_id);

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`https://module-56-coffe-store-server-3w614vef9-papon-das-projects.vercel.app/user/coffee/${_id}`,{
method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    const remaining = coffees.filter(cof => cof._id !== _id)
    setCoffees(remaining);
      }
    })
  }
})
  }
  return (
    
                  <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={photo} alt="Movie" />
              </figure>
              <div className="grid grid-cols-2 ">
               <div>
                 <h2 className="card-title">Name:{name}</h2>
                <p className="font-bold">Quantity: {quantity}</p>
                <p className="font-bold">Supplier: {supplier}</p>
                <p className="font-bold">Taste: {taste}</p>
                <p className="font-bold">Category: {category}</p>
                <p className="font-bold">Details: {details}</p>
                </div>
                <div className="p-7">
                  <div className="btn-group btn-group-vertical space-y-4">

                    <button className="btn btn-active">View</button>

                   <Link to={`updateCoffee/${_id}`}> <button className="btn">Edit</button></Link>
                    
                    <button onClick={()=>handleDelete(_id)}
                    className="btn">Delete</button>
                  </div>
                </div>
              </div>
            </div>
    
  );
};

export default CoffeeCard;