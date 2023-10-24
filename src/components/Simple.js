import React, { useState } from "react";

import { useForm } from "react-hook-form";

export default function Simple() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm({ mode: "onBlur" });

  const password = watch("password", "");

  const [paasedData, setPassedData] = useState("Form Is Not Submitted Yet!");

  const onSubmit = (data) => {
    console.log(data);
    setPassedData(data);
  };

  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="d-flex justify-content-center py-5">
          <div className="card p-4">
            <h3>Simple Form Validation</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="examplename" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="examplename"
                  {...register("name", {
                    required: "Name Field Required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Only Alphabate is allowed",
                    },
                    minLength: {
                      value: 3,
                      message: "This input must exceed 3 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "This input must Not exceed 30 characters",
                    },
                  })}
                />
                <div id="name" className="form-text text-danger">
                  {errors.name?.message}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="State" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  {...register("state", {
                    required: "Please Select State",
                  })}
                >
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div id="name" className="form-text text-danger">
                  {errors.state?.message}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email", {
                    required: "Email Field Required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Enter Valid Email",
                    },
                  })}
                />
                <div id="emailHelp" className="form-text text-danger">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  {...register("password", {
                    required: "Password Field Required",
                  })}
                />
                <div id="password" className="form-text text-danger">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  {...register("cpassword", {
                    required: "Confirm Password Field Required",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Password Deoes Not Match",
                  })}
                />
                <div id="cpassword" className="form-text text-danger">
                  {errors.cpassword?.message}
                </div>
              </div>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  {...register("termncond", {
                    required: "field must be checked",
                  })}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Default switch checkbox input
                </label>
                <div id="termncond" className="form-text text-danger">
                  {errors.termncond?.message}
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <h3 className="py-5">Your Submitted Data will Show Here</h3>
        {paasedData.name && (
          <div>
            Name = {paasedData.name}
            <br />
            State = {paasedData.state}
            <br />
            Email = {paasedData.email}
            <br />
            Password = {paasedData.password}
            <br />
            Term & Condition = {paasedData.termncond ? "true" : "false"}
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
