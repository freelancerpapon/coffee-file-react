import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

  const handleUpdateCoffee = e =>{
    e.preventDefault();
    const form = e.target 

    const name = form. name. value;
const quantity = form. quantity. value;
const supplier = form.supplier. value;
const taste = form. taste. value;
const category = form. category. value;
const details = form.details.value;
const photo = form.photo. value;

const updateCoffee = {name,quantity,supplier,taste,category,details,photo}
console.log(updateCoffee);

// send data to server
fetch(`https://module-56-coffe-store-server-3w614vef9-papon-das-projects.vercel.app/user/coffee/${_id}`,{
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateCoffee),
})
.then(res => res.json())
.then(data => {
console.log(data);
if(data.modifiedCount > 0){
  Swal.fire({
    title: 'success!',
    text: 'coffee update successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
}

})

  }


  const coffee = useLoaderData()
  const {photo,details,category,taste,supplier,quantity,name,_id} = coffee;


  return (
    <div className="bg-[#F4F3F0]  p-24">
    <h2 className="text-3xl font-semibold italic">Update Coffee Name: {name}</h2>
    <form
     onSubmit={handleUpdateCoffee}

    className="space-y-5">
<div className="md:flex">
{/* no 1 */}
<div className="form-control md:w-1/2">
<label className="label">
  <span className="label-text">Coffee Name</span>
</label>
<label className="input-group">
  
  <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
</label>
</div>

{/* no 2 */}
<div className="form-control md:w-1/2 ml-4">
<label className="label">
  <span className="label-text">Available Quantity</span>
</label>
<label className="input-group">
  
  <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity}  className="input input-bordered w-full" />
</label>
</div>

</div>
<div className="md:flex">
{/* no 3 */}
<div className="form-control md:w-1/2">
<label className="label">
  <span className="label-text">Supplier</span>
</label>
<label className="input-group">
  
  <input type="text" name="supplier" placeholder="Enter coffee supplier" defaultValue={supplier}  className="input input-bordered w-full" />
</label>
</div>

{/* no 4 */}
<div className="form-control md:w-1/2 ml-4">
<label className="label">
  <span className="label-text">Taste</span>
</label>
<label className="input-group">
  
  <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" />
</label>
</div>

</div>
<div className="md:flex">
{/* no 5 */}
<div className="form-control md:w-1/2">
<label className="label">
  <span className="label-text">Category</span>
</label>
<label className="input-group">
  
  <input type="text" name="category" placeholder="category" defaultValue={category}  className="input input-bordered w-full" />
</label>
</div>

{/* no 6 */}
<div className="form-control md:w-1/2 ml-4">
<label className="label">
  <span className="label-text">Details</span>
</label>
<label className="input-group">
  
  <input type="text" name="details" placeholder="Details" defaultValue={details}  className="input input-bordered w-full" />
</label>
</div>


</div>
<div className="">
{/* no 7 */}
<div className="form-control md:w-full">
<label className="label">
  <span className="label-text">Photo</span>
</label>
<label className="input-group">
  
  <input type="text" name="photo" placeholder="Photo" defaultValue={photo} className="input input-bordered w-full" />
</label>
</div>
</div>
<input className="btn btn-success btn-block" type="submit" value="Add Coffee" />

    </form>

    <Link to="/"><button className='btn btn-error mt-5 w-full'>Go Back</button></Link>
  </div>
  );
};

export default UpdateCoffee;