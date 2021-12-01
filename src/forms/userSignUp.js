import React,{useState} from 'react'
import { Formik } from 'formik';
import * as mui from '@mui/material';
import { baseUrl } from '../App';
import { useAuth, getData } from '../helpers';
import * as Icons from '@mui/icons-material'
import { useNavigate } from 'react-router';
 
function UserSignUp() {
 
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

// const [showPassword, setShowPassword] = useState(false);
// const handleClickShowPassword = () => setShowPassword(!showPassword);
// const handleMouseDownPassword = () => setShowPassword(!showPassword);
const auth = useAuth()
const navigate = useNavigate()

  // form handlers
  const FormSubmission = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    //   alert("successfully login")
    //   //  signUp(cb, userData)
    //   auth.signUp(()=>{
    //   navigate('/login')
    //   }, values) 
    // setSubmitting(false);
    // resetForm();
  };

  

  return (
    <div>
     <div className="App-header">
        <div className="login-container">
          <h3>SIGN UP</h3>
          <Formik
            initialValues={{
              username: '',
              password: '',
              email:'',
              name:'',
              mobileNo : '',
              gender: '',
              address:"",
              pincode:""
            }}
            onSubmit={FormSubmission}

          >
            {({ values, handleChange, handleSubmit, handleBlur }) => (
              <div style={{ textAlign: "center" }}>
                <TextField
                  id="name"
                  name='name'
                  placeholder='Full Name'
                  label="Full Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="input"
                  margin="normal"
                  required/>
                  
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
                  type="email"
                  id="email"
                  name='email'
                  placeholder='Email'
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="input"
                  margin="normal"
                  required/>

                <TextField
                  type="tel"
                  id="mobileNo"
                  name='mobileNo'
                  placeholder='Mobile No'
                  label="Mobile No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobileNo}
                  className="input"
                  margin="normal"/>

                <TextField
                  multiline
                  id="address"
                  name='address'
                  placeholder='Full Address'
                  label="Full Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  className="input"
                  margin="normal"
                  required/>

                <TextField
                  type="numeric"
                  id="pincode"
                  name='pincode'
                  placeholder='pincode'
                  label="pincode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pincode}
                  className="input"
                  margin="normal"
                  pattern="[0-9]{6}"
                  inputProps={{ maxLength: 6, pattern:"[0-9]{6}" }}
                  required/>   

                <Button
                  variant="contained"
                  type="submit"
                  color="inherit"
                  size="large"
                  onClick={handleSubmit}
                >
                  SIGN UP
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



  const getVerify = async (FormData) => {
    let fetchingUrl = await fetch(`${baseUrl}/user/verify`, {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: { "Content-Type": "application/json", 'Accept': "*/*" },
    });
    let responce = await fetchingUrl.json();
    return responce;
  };

 

  


  



export default UserSignUp
