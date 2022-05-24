import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Spinner from '../ForAll/Spinner';
import { FcGoogle } from "react-icons/fc";
import useToken from '../hook/useToken';

const SignUp = () => {
    // navigator 
    const naviget = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    // create User With Email And Password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // update Profile
    const [updateProfile, updating, UpdatError] = useUpdateProfile(auth);

    // send Email Verification
    const [sendEmailVerification, sending, Verificationerror] = useSendEmailVerification(auth);

    // signIn Wit google 
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)

    const [token] = useToken(guser || user)
    // react form 
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password, sendEmailVerification(true));
        await updateProfile(data.name);
    };

    let signInError;

    if (gerror || error || UpdatError || Verificationerror) {
        signInError = <p className='text-red-500'><small>{error?.message}{gerror?.message}</small></p>
    }

    if (gloading || loading || updating || sending) {
        return <Spinner></Spinner>;
    }

    if (token) {
        naviget(from, { replace: true })
    }



    return (
        <div>
            <div className='flex h-screen justify-center  my-[40px]'>
                <div className="card h-[600px] w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-center text-xl font-semibold mb-[10px]'>Sing Up</h1>
                            <div className="form-control">
                                {/*name  */}
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Requierd"
                                    }

                                })}
                                    type='name' className="input input-bordered" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-[red]">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
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
                                    type='email' className="input input-bordered" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-[red]">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-[red]">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
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
                                    type='text' className="input input-bordered" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-[red]">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-[red]">{errors.password.message}</span>}
                                </label>
                                {signInError}
                            </div>
                            {/* Sign Up */}
                            <div className="form-control mt-[18px]">
                                <input className="btn btn-accent text-white" type="submit" value="Sign Up" />
                            </div>
                            <div className='text-center font-semibold m-[4px]'>
                                <small>Allready have a Doctors Portal? <Link to="/login" className='text-cyan-500' >Log in plz</Link></small>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-[18px]">
                                <button onClick={() => signInWithGoogle()} className="btn bg-white text-black text-lg font-normal"><FcGoogle className='text-2xl mx-[5px]' />CONTINUE WITH GOOGLE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;