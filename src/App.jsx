import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>
    <Header></Header>
      <h1 className="text-center text-6xl">Coffees {coffees.length}</h1>
      <Link to="/addCoffee">
        <button className="btn">Add</button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto">


     {
        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)

      }
      </div>
    </>
  );
}

export default App;
