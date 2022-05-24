import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Spinner from '../ForAll/Spinner';
import { FcGoogle } from "react-icons/fc";
import useToken from '../hook/useToken';

const LogIn = () => {

    // navigator 
    const naviget = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    // signIn Wit google 
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)

    // email and password login 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(guser || user)

    // react form 
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    let signInError;

    if (gerror || error) {
        signInError = <p className='text-red-500'><small>{error?.message}{gerror?.message}</small></p>
    }
    if (gloading || loading) {
        return <Spinner></Spinner>;
    }

    if (token) {
        naviget(from, { replace: true })
    }

    return (
        <div>
            <div className='flex h-screen justify-center  my-[50px]'>
                <div className="card h-[554px] w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <h1 className='text-center text-xl font-semibold mb-[20px]'>LogIn</h1>
                        <div className="form-control">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* email  */}
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Requierd"
                                    },
                                    pattern: {
                                        value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                        message: "provid a valid Email"
                                    }
                                })}
                                    type='email' className="input input-bordered w-full" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-[red]">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-[red]">{errors.email.message}</span>}
                                </label>

                                {/* Password */}
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Requierd"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be more then 6 charactor"
                                    }
                                })}
                                    type='text' className="input input-bordered w-full" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-[red]">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-[red]">{errors.password.message}</span>}
                                    <small className='text-cyan-500' onClick={''}>Forget Password</small>
                                </label>
                                {signInError}
                                {/* login btn  */}
                                <div className="form-control mt-[18px]">
                                    <input className="btn btn-accent text-white" type="submit" value='Log In' />
                                </div>
                            </form>
                            <div className='text-center font-semibold m-[4px]'>
                                <small>New to Doctors Portal? <Link className='text-cyan-500' to='/signup'>Create new account</Link></small>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-[18px]">
                                <button onClick={() => signInWithGoogle()} className="btn bg-white  text-lg font-normal"><FcGoogle className='text-2xl mx-[5px]' /> CONTINUE WITH GOOGLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default LogIn;