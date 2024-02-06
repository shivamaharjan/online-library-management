import { sendPasswordResetEmail} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { toast } from "react-toastify";
import CustomInput from "../../components/custominput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { auth } from "../../config/firebase-config";
import "./auth.css";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const inputs = [
    {
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "abcd@wxyz.com",
      required: true,
    }
  ];

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { email } = formData;
        sendPasswordResetEmail(auth, email)
          .then(() => {
            toast.success("Reset Successful");
          })
          .catch((e) => {
            toast.error(e.message);
          });
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
              Send Email
            </Button>
          </div>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default ResetPassword;
