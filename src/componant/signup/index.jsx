import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onsubmit = (data) => {
        // console.log('data', data)
    }
    // console.log(watch().ConPassword);
    // console.log(errors)

    const password = watch().password;
    const conPassword = watch().ConPassword;

    return (
        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>be member with us</h3>
                            <form className="requires-validation" onSubmit={handleSubmit(onsubmit)} noValidate>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="name" placeholder="Full Name" {...register('name', { required: true })} />
                                    {
                                        (errors.name && errors.name.type === "required") &&
                                        <div className='text-warning'>Name field cannot be blank!</div>
                                    }
                                </div>  {/* Name */}
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="email" placeholder="E-mail Address" {...register('email', {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })} />
                                    {
                                        (errors.email && errors.email.type === "pattern") &&
                                        <div className='text-warning'>Email field is valid!</div>}
                                    {
                                        (errors.email && errors.email.type === "required") &&
                                        <div className='text-warning'>Email field cannot be blank!</div>
                                    }
                                </div>  {/* Email */}
                                <div className="col-md-12">
                                    <select className="form-select mt-3 select" multiple data-mdb-placeholder="Example placeholder" {...register('select', { required: true })} >
                                        <option value="1">Football</option>
                                        <option value="2">Running</option>
                                        <option value="3">Sports</option>
                                    </select>
                                    {
                                        (errors.select && errors.select.type === "required") &&
                                        <div className='text-warning'>Please select a position!</div>
                                    }
                                </div>  {/* Hobbies */}
                                <div className="col-md-12">
                                    <input className="form-control" type="password" name="password" placeholder="Password" {...register('password', { required: true, minLength: 6 })} />
                                    {
                                        (errors.password && errors.password.type === "minLength") &&
                                        <div className='text-warning'>Password is so short!</div>
                                    }
                                    {
                                        (errors.password && errors.password.type === "required") &&
                                        <div className='text-warning'>Email field cannot be blank!</div>
                                    }
                                </div>  {/* password */}
                                <div className="col-md-12">
                                    <input className="form-control"
                                        type="password" name="Confiempassword"
                                        placeholder="Confirm Password"
                                        {...register('ConPassword', { required: true }, { validate: (value) => value === password })} />

                                    {
                                        (errors.ConPassword && errors.ConPassword.type === "required") &&
                                        <div className='text-warning'>confirn password field cannot be blank!</div>
                                    }
                                </div>  {/* Confiempassword */}
                                <div className="col-md-12 mt-3">
                                    <label className="mb-3 mr-1" htmlFor="gender">Gender: </label>

                                    <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off"  {...register('gender', { required: true })} />
                                    <label className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>

                                    <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off"  {...register('gender', { required: true })} />
                                    <label className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>
                                    {
                                        (errors.gender && errors.gender.type === "required") &&
                                        <div className='text-warning'>Please select a gender!</div>
                                    }
                                </div>  {/* gender */}
                                <div className="form-button mt-3">
                                    <button id="submit" type="submit" className="btn btn-primary" >Register</button>
                                </div>  {/* submit */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup