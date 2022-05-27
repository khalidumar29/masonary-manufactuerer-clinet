import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../Hooks/useToken/useToken";
const SignUp = () => {
  const navigate = useNavigate();
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [token] = useToken(gUser || eUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    if (data.password === data.confirmpassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
    } else if (data.password !== data.confirmpassword) {
      setConfirmPasswordError(`password didn't match`);
      console.log(confirmPasswordError);
    }
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  if (eLoading || gLoading || updating) {
    return <Loading />;
  }
  let signInError;
  if (eError || gError || error) {
    signInError = (
      <p className='text-error'>
        {eUser?.message || gUser?.message || eError?.message}
      </p>
    );
  }
  return (
    <div className="bg-[url('/src/assets/images/bg-for-login.jpg')] hero lg:min-h-[90vh] md:min-h-[90vh] min-h-[70vh]">
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body flex flex-col border-opacity-50 lg:ml-[-7px] lg:w-[25rem] md:w-[25rem] w-[21.5rem]'>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl text-primary'>Sign Up</h1>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: { value: true, message: "name is required" },
                    })}
                    type='text'
                    placeholder='name'
                    className='input input-bordered'
                    required
                  />
                  <label htmlFor='name' className='label'>
                    {errors.name?.type === "required" && (
                      <>
                        <span>{errors.name.message}</span>
                      </>
                    )}
                  </label>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "provid a valid email",
                      },
                    })}
                    type='email'
                    placeholder='email'
                    className='input input-bordered'
                    required
                  />
                  <label htmlFor='label'>
                    {errors.email?.type === "required" && (
                      <>
                        <span>{errors.email.message}</span>
                      </>
                    )}
                  </label>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 8,
                        message: "password must have 8 digit",
                      },
                    })}
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                  {signInError}
                  {errors.password?.type === "required" && (
                    <>
                      <span className='label-text-alt text-error'>
                        {errors.password.message}
                      </span>
                    </>
                  )}
                  {errors.password?.type === "minLength" && (
                    <>
                      <span className='label-text-alt text-error'>
                        {errors.password.message}
                      </span>
                    </>
                  )}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <input
                    {...register("confirmpassword")}
                    type='password'
                    placeholder='confirm password'
                    className='input input-bordered'
                    required
                  />
                  {confirmPasswordError && (
                    <>
                      <label className='text-error'>
                        {confirmPasswordError}
                      </label>
                    </>
                  )}
                </div>
                <div className='form-control mt-6'>
                  <button type='submit' className='btn btn-primary'>
                    Login
                  </button>
                  <h1 className='text-sm text-center mt-2'>
                    Already have an accoutn?{" "}
                    <span
                      onClick={() => {
                        navigate("/login");
                      }}
                      className='text-primary cursor-pointer'
                    >
                      Please login
                    </span>
                  </h1>
                </div>
              </form>
            </div>
            <div className='divider '>OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className='btn btn-outline btn-gost capitalize'
            >
              continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
