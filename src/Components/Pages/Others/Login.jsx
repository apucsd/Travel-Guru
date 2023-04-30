import React, { useContext } from "react";
import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        toast.success("Log in Success");
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <Toaster />
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Please login here
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered"
                name="email"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                name="password"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <span>
                Don't have an account ?
                <Link
                  to="/authentication/register"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Register
                </Link>
              </span>
              <br />
              <button className="btn btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
