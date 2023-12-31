import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomeInput from '../components/CustomeInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

let schema = Yup.object().shape({
  email : Yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password : Yup
    .string()
    .required("password is required"),
});

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues : {
      email : "",
      password :""
    },
    validationSchema : schema,
    onSubmit : (values) => {
      dispatch(login(values));
      alert(JSON.stringify(values,null,2));
    },
  });

  const authState = useSelector((state) => state);

  const {user, isLoading, isError, isSuccess, message} = authState.auth;
  
  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isLoading, isError, isSuccess, navigate]);
  
  
  return (
    <div className='py-5' style={{background : "#ffd333", minHeight : "100vh"}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center'>Login</h3>
            <p className='text-center'>Login into your accout</p>
            <div className='error text-center'>
              {message.message === "Rejected" ? "You are not an Admin" : ""}
            </div>
            <form action='' onSubmit={formik.handleSubmit}>
            <CustomeInput 
              type="text" 
              name="email"
              label="Email Address" 
              id ='email' 
              val={formik.values.email}
              onCh = {formik.handleChange("email")}  
            />

            <div className='error'>
              {
                formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
                ) : null
              }
            </div>

            <CustomeInput 
              type="password" 
              name="password"
              label="Paasword" 
              id ='pass'
              val={formik.values.password}
              onCh = {formik.handleChange("password")}
            />

            <div className='error'>
              {
                formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                ) : null
              }
            </div>

            <div></div>
            <button
                className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
                style={{background : "#ffd333"}}
                type='submit'>
                    Login
                </button>
            </form>
        </div>
    </div>
  );
};

export default Login;