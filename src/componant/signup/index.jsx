import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
// import { Signup } from "../signup";

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onsubmit = (e, data) => {
        // e.preventDefault()      
        // console.log(data)

    }

    console.log(errors)

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
                                </div>
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
                                </div>
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
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="password" name="password" placeholder="Password" {...register('Password', { required: true, minLength: 20 })} />
                                    {
                                        (errors.password && errors.password.type === "minLength") &&
                                        <div className='text-warning'>Password is so short!</div>
                                    }
                                    {
                                        (errors.password && errors.password.type === "required") &&
                                        <div className='text-warning'>Email field cannot be blank!</div>
                                    }
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="password" name="Confiempassword" placeholder="Confiem Password"  {...register('ConPassword', { required: true })} />
                                    <div className="valid-feedback">Password field is valid!</div>
                                    {
                                        (errors.ConPassword && errors.ConPassword.type === "required") &&
                                        <div className='text-warning'>confirn password field cannot be blank!</div>
                                    }
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label className="mb-3 mr-1" for="gender">Gender: </label>

                                    <input type="radio" className="btn-check" name="gender" id="male" autocomplete="off"  {...register('gender', { required: true })} />
                                    <label className="btn btn-sm btn-outline-secondary" for="male">Male</label>

                                    <input type="radio" className="btn-check" name="gender" id="female" autocomplete="off"  {...register('gender', { required: true })} />
                                    <label className="btn btn-sm btn-outline-secondary" for="female">Female</label>
                                    {
                                        (errors.gender && errors.gender.type === "required") &&
                                        <div className='text-warning'>Please select a gender!</div>
                                    }
                                </div>
                                <div className="form-button mt-3">
                                    <button id="submit" type="submit" className="btn btn-primary" >Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup