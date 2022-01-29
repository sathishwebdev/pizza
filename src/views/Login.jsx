import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, CssBaseline }  from "@mui/material";
import * as mui from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaRounded";
import { Loader, Message } from "../containers";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/users.actions";
// Formik
import { useFormik } from "formik";
import { initialLoginValues, loginSchema } from "../core/formik-validations";
// Form Controls
import {
  EmailAdressFormControl,
  PasswordFormControl,
} from "../core/form-controls";

import {useNavigate, useLocation} from 'react-router-dom'

const Button = mui.styled(mui.Button)(({ theme }) => ({
  color: theme.palette.getContrastText(mui.colors.purple[500]),
  backgroundColor: "#000000",
  margin: "3%",
  fontFamily:"hussor-bold",

  "&:hover": {
    backgroundColor: "rgba(56, 56, 56, 0.938)",
    color: "white",
    boxShadow: "0px 0px 20px 1px #0f0f0f",
  },
  '&:focus':{
    border: 'none',
    boxShadow: "none",
    outline: "none"
},
}));

export default function Login() {
  const dispatch = useDispatch();

  const history = useNavigate();
  const location = useLocation()

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Login Selector
  const { loading, error, user_login } = useSelector(
    (state) => state.users.login
  );

  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (user_login) {
      history(redirect);
    }
  }, [user_login, dispatch, history, redirect]);

  return (
    <div className="login center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "black", height:'100px', width:'100px' }} className="m-auto">
            <LocalPizzaOutlinedIcon size='large' />
          </Avatar>
          <h3>Sign in</h3>

          {error && <Message type="error" message={error} />}
          <form onSubmit={formik.handleSubmit}>
            <EmailAdressFormControl formik={formik} />
            <PasswordFormControl formik={formik} />

            {loading && <Loader />}
            <Button
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
            <div className="text-center">
              <Link to="/register" className="text-dark">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
