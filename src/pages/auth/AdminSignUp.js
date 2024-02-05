import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../../components/custominput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { auth, db } from "../../config/firebase-config";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "Sam",
    required: true,
  },
  {
    label: "Last Name *",
    name: "lName",
    type: "text",
    placeholder: "Smith",
    required: true,
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "abcd@wxyz.com",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "number",
    placeholder: "044*******",
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "********",
    required: true,
  },
  {
    label: "Confirm Password *",
    name: "confirmPassword",
    type: "password",
    placeholder: "********",
    required: true,
  },
];

function AdminSignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword, ...rest } = formData;

    if (password !== confirmPassword) {
      return toast.error("Password and confirm password did not match!!!");
    }

    //call firebase to authenticate / save data to firebase
    const { email } = formData;
    try {
      const authSnapPromise = createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.promise(authSnapPromise, {
        pending: "In Progress...",
      });

      const authSnap = await authSnapPromise;
      await setDoc(doc(db, "users", authSnap.user.uid), rest);
      toast.success("User Created Successfully...");
    } catch (e) {
      toast.error(`Something went wrong ${e.message}`);
    }
    navigate("/")
  };

  return (
    <DefaultLayout>
      <div className="form-container">
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

export default AdminSignUp;
