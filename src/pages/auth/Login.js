import React, { useState } from 'react'
import DefaultLayout from '../../components/layouts/DefaultLayout';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/custominput/CustomInput';
import "./auth.css"
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase-config';

function Login() {
    const inputs = [
      {
        label: "Email *",
        name: "email",
        type: "email",
        placeholder: "abcd@wxyz.com",
        required: true,
      },
      {
        label: "Password *",
        name: "password",
        type: "password",
        placeholder: "********",
        required: true,
      }
    ];

    const [formData, setFormData] = useState({});

    const handleOnChange = (e) => {
        const{name, value} = e.target;
    
        setFormData({...formData, [name]: value})
        console.log(formData)

    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try{
            const {email,password} = formData;
            const signInPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(signInPromise, {
        pending: "In Progress...",
      });
      const { user } = await signInPromise;
      const userId = user.uid;
      toast.success("Login in Successful");
    //   // pull the user info from DB
    //   dispatch(getUserInfoAction(userId));
    //   // Set it to Store

        } catch (e){
            toast.error(`Something went wrong ${e.message}`)

        }
    };
  return (
    <DefaultLayout>
      <div className="form-container login-box">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input, i) => {
            return <CustomInput key={i} {...input} onChange={handleOnChange} />;
          })}
          <div className="d-flex justify-content-center align-items-center ">
            <Button type="submit" variant="dark">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Login