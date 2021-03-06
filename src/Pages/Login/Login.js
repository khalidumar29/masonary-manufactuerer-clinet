import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../Hooks/useToken/useToken";
const Login = () => {
  const navigate = useNavigate();
  let passwordResetError;
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, uError] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [token] = useToken(gUser || eUser);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  if (eLoading || gLoading || sending) {
    return <Loading />;
  }

  let logInError;
  if (eError || gError || uError) {
    logInError = (
      <p className="text-error">
        {eError?.message || gError?.message || uError.message}
      </p>
    );
  }
  return (
    <div className="bg-[url('/src/assets/images/bg-for-login.jpg')] hero lg:min-h-[90vh] md:min-h-[90vh] min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body flex flex-col border-opacity-50 lg:ml-[-7px] lg:w-[25rem] md:w-[25rem] w-[21.5rem]">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl text-primary">Login</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: { value: true, message: "email is rquired" },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "provid a valid email",
                      },
                    })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                  <label htmlFor="email" className="label">
                    {errors.email?.type === "required" && (
                      <>
                        <span className="label-text-alt text-error">
                          {errors.email.message}
                        </span>
                      </>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-error">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                  {passwordResetError}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 8,
                        message: "password must have at least 8 charcter",
                      },
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label htmlFor="password" className="label">
                    {errors.password?.type === "required" && (
                      <>
                        <span className="label-text-alt text-error">
                          {errors.password.message}
                        </span>
                      </>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-error">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  {logInError}
                  <label className="label">
                    <Link
                      onClick={() => {
                        const email = getValues("email");
                        sendPasswordResetEmail(email);
                      }}
                      to={""}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <h1 className="text-sm text-center mt-2">
                    new to mm?{" "}
                    <span
                      onClick={() => {
                        navigate("/signUp");
                      }}
                      className="text-primary cursor-pointer"
                    >
                      Create new account
                    </span>
                  </h1>
                </div>
              </form>
            </div>
            <div className="divider ">OR</div>
            <button
              onClick={() => {
                signInWithGoogle(register.email);
              }}
              className="btn btn-outline btn-gost capitalize"
            >
              continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
