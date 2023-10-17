import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import Header from "./Header";

const Signup = () => {

  const {createUser} = useContext(AuthContext)

const handleSignUp = e =>{
  e.preventDefault()
  const form = e.target 
  const email = form.email.value
  const password = form.password.value
  console.log(email,password);

  // user create
createUser(email,password)
.then(result => {
  console.log(result.user)
  
  const createdAt = result.user?.metadata?.creationTime


  const user = {email, createdAt: createdAt}
  fetch('https://module-56-coffe-store-server-n5bssfvqh-papon-da-projects.vercel.app/user',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{
    if(data.insertedId){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User added successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  
  })
})
.catch(error => {
  console.error(error);
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Already have an Account',
    footer: '<a href="">Why do I have this issue?</a>'
  })

})

}

  return (
  
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
  <Header></Header>
<h2 className="text-5xl">Register here</h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       
      <form  onSubmit={handleSignUp}
       className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>

    </div>
  </div>
</div>
  );
};

export default Signup;