import React,{useState} from 'react'
import { Formik } from 'formik';
import * as mui from '@mui/material';
import { baseUrl } from '../App';
import { useAuth, getData } from '../helpers';
import * as Icons from '@mui/icons-material'
import { useNavigate } from 'react-router';
 
export default function LoginForm() {
 
  // style 

  const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000000",
    margin: "3%",

    '&:hover': {
      backgroundColor: "#a5a5a5",
      color: "black",
      boxShadow: "0px 0px 15px 1px"
    },
  }));
  const TextField = mui.styled(mui.TextField)({
    '& label.Mui-focused': {
      color: "black"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });

const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
const auth = useAuth()
const navigate = useNavigate()

  // form handlers
  const FormSubmission = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    let api = await getAPI(values);
    let key = api.apiKey ? api.apiKey : null;
    if (!key) {
      alert(api.message);
    } else {
      let data = await getData(baseUrl, key)
      alert("successfully login")
      //  signin(cb, userData)
      auth.signIn(()=>{
      navigate('/users')
      }, data) 
    }
    setSubmitting(false);
    resetForm();
  };


  return (
    <div>
      <div className="logo">
        <h1 title="Sathish_Web_Dev"> PIZZA GUY_ </h1>
      </div>

      <hr />

      <div className="App-header">
        <div className="login-container">
          <p style={{ fontSize: "small" }}>Only For ADMINS *</p>
          <h3>LOG IN</h3>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={FormSubmission}

          >
            {({ values, handleChange, handleSubmit, handleBlur }) => (
              <div style={{ textAlign: "center" }}>
                <TextField
                  id="username"
                  name='username'
                  placeholder='Username'
                  label="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="input"
                  margin="normal"
                  required />

                <TextField
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name='password'
                  placeholder='password'
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="input"
                  margin="normal"
                  InputProps={{
                    endAdornment:(
                      <mui.InputAdornment position="end">
                        <mui.IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Icons.Visibility /> : <Icons.VisibilityOff />}
                        </mui.IconButton>
                      </mui.InputAdornment>

                    )
                  }}
                  required/>

                <Button
                  variant="contained"
                  type="submit"
                  color="inherit"
                  size="large"
                  onClick={handleSubmit}
                >
                  LOG IN
                </Button>
              </div>

            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

// data handlers



  const getAPI = async (FormData) => {
    let fetchingUrl = await fetch(`${baseUrl}/admin/login`, {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: { "Content-Type": "application/json", 'Accept': "*/*" },
    });
    let responce = await fetchingUrl.json();
    return responce;
  };

 

  


  

