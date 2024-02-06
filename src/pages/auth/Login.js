import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../../components/custominput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { auth } from "../../config/firebase-config";
import { getUserInfoAction } from "../../redux/auth/authAction";
import "./auth.css";
import { isStudent } from "../../utils";

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
    },
  ];

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo?.uid) {
      if(isStudent(userInfo)){
        navigate("/")
      } else {
        navigate("/dashboard")
      }
    }
  }, [userInfo]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const signInPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(signInPromise, {
        pending: "In Progress...",
      });
      const { user } = await signInPromise;
      const userId = user.uid;
      toast.success("Login in Successful");
      // pull the user info from DB
      dispatch(getUserInfoAction(userId));
      // Set it to Store
    } catch (e) {
      toast.error(`Something went wrong ${e.message}`);
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
              Login
            </Button>
          </div>
        </Form>
        <p>
          Forget Password? <Link to="/reset-password"> Reset </Link>
        </p>
        <p>
          Don't have account? <Link to="/sign-up"> Sign Up </Link>
        </p>
      </div>
    </DefaultLayout>
  );
}

export default Login;
