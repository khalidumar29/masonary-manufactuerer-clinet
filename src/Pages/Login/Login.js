import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div class="bg-[url('/src/assets/images/bg-for-login.jpg')] hero lg:min-h-[90vh] md:min-h-[90vh] min-h-[70vh]">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body flex flex-col w-full border-opacity-50 lg:ml-[-7px] lg:w-[25rem] md:w-[25rem] w-[21.5rem]">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl text-primary">Login</h1>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    class="input input-bordered"
                    required
                  />
                  <label class="label">
                    <Link to={""} class="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="divider ">OR</div>
            <button className="btn btn-outline btn-gost capitalize">
              continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
