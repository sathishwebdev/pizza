import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar,  CssBaseline } from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";
// Redux
import { registerUser } from "../redux/actions/users.actions";
import { setSnackbar } from "../redux/actions/snackbar.actions";
import { UserActionTypes } from "../redux/types/user.types";
import { useSelector, useDispatch } from "react-redux";
// Formik
import { useFormik } from "formik";
import {
  initialRegisterValues,
  registerSchema,
} from "../core/formik-validations";
import { Loader, Message } from "../containers";
// Form Controls
import {
  EmailAdressFormControl,
  NameFormControl,
  PasswordWithValidationFormControl,
  ConfirmPasswordFormControl,
} from "../core/form-controls";

import * as mui from "@mui/material";
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

export default function Register({ history }) {
  const dispatch = useDispatch();

  // User Register Selector
  const { loading, error, success } = useSelector(
    (state) => state.users.create
  );

  const formik = useFormik({
    initialValues: initialRegisterValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(
        registerUser({
          name: values.name,
          email: values.email,
          password: values.newPassword,
        })
      );
    },
  });

  useEffect(() => {
    if (success) {
      const message = "User register successfully";
      dispatch(setSnackbar(true, "success", message));
      dispatch({ type: UserActionTypes.REGISTER.RESET });
      history.push("/login");
    }
  }, [success, dispatch, history]);

  return (
    <div className="register center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "black", height:'100px', width:'100px' }} className="m-auto">
            <LocalPizzaOutlinedIcon size='large' />
          </Avatar>
          <h3>Register</h3>

          {error && <Message message={error} type={"error"} />}

          <form onSubmit={formik.handleSubmit}>
            <NameFormControl formik={formik} />
            <EmailAdressFormControl formik={formik} />
            <PasswordWithValidationFormControl formik={formik} />
            <ConfirmPasswordFormControl formik={formik} />

            {loading && <Loader />}
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Create Account
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-dark">
                {"Already have an account? Sign In"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
