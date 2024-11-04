// pages/Home.jsx

import { Link } from "react-router-dom";
import { Button } from "../components/Button"; // Assuming Button is a reusable component in your project

export const Home = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">Welcome to Our App</h1>
      <p className="text-lg text-slate-600 mb-8">Please sign in or sign up to get started.</p>
      
      <div className="flex space-x-4">
        <Link to="/signin">
          <Button label={"Sign In"} />
        </Link>
        <Link to="/signup">
          <Button label={"Sign Up"} />
        </Link>
      </div>
    </div>
  );
};
