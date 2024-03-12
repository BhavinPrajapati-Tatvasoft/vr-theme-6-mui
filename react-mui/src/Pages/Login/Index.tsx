import * as React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Hidden,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  checkboxCheckedIcon,
  checkboxDefaultIcon,
  hidePasswordIcon,
  loginMockup,
  LogoWhite,
  showPasswordIcon,
} from "../../assets/images";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

const { useLayoutEffect } = React;
function Login() {
  const [showPassword, setShowPassword] = React.useState(true);

  //GSAP Animations
  useLayoutEffect(() => {
    let loginText = gsap.timeline();
    loginText.fromTo(
      ".login-wrapper .MuiTypography-h5",
      { y: "-40px", opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="login-wrapper">
        <Grid container className="login-container">
          <Grid item xl={7} lg={6} xs={12} className="login-hero">
            <div className="login-content">
              <Link to="#" className="login-logo" title="Company">
                <Avatar src={LogoWhite} alt="Company" variant="square" />
              </Link>
              <Hidden lgDown>
                <div className="login-mockup">
                  <img
                    src={loginMockup}
                    alt="Mockup"
                    onLoad={(e) => {
                      let loginImg = gsap.timeline();
                      loginImg.fromTo(
                        ".login-wrapper .login-mockup img",
                        { scale: 0.7, opacity: 0 },
                        { scale: 1, opacity: 1 },
                        "<"
                      );
                    }}
                  />
                </div>
                <Typography variant="body1" className="copyright-text">
                  {" "}
                  © 2021 Company. All Rights Reserved.{" "}
                </Typography>
              </Hidden>
            </div>
          </Grid>

          <Grid item xl={5} lg={6} xs={12} className="login-main">
            <div className="form-wrapper">
              <form>
                <Typography
                  variant="h2"
                  onLoad={(e) => {
                    let loginText = gsap.timeline();
                    loginText.fromTo(
                      ".login-wrapper .MuiTypography-h2",
                      { y: "10px", opacity: 0 },
                      { y: 0, opacity: 1 },
                      "<"
                    );
                  }}
                >
                  <Typewriter
                    words={["Welcome Back!"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </Typography>
                <Typography variant="h5">Login into your account</Typography>
                <FormControl variant="standard" fullWidth sx={{ pb: "14px" }}>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input id="username" type="text" />
                </FormControl>
                <FormControl
                  variant="standard"
                  fullWidth
                  className="password-field"
                >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type={showPassword ? "password" : "text"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Avatar
                            src={
                              showPassword ? hidePasswordIcon : showPasswordIcon
                            }
                            title={
                              showPassword ? "Show Password" : "Hide Password"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className="forgot-password">
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={
                          <Avatar variant="square" src={checkboxDefaultIcon} />
                        }
                        checkedIcon={
                          <Avatar variant="square" src={checkboxCheckedIcon} />
                        }
                        defaultChecked
                      />
                    }
                    label="Remember Me"
                  />
                  <Link to="#" title="forgot password" className="custom-link">
                    Forgot password
                  </Link>
                </div>
                <Button
                  variant="contained"
                  component={Link}
                  to="/dashboard"
                  className="btn-dark"
                  fullWidth
                  title="Login"
                >
                  Login
                </Button>
                <Typography variant="body1" className="sign-up-link">
                  Don’t have an account? <Link to="#">Sign up </Link>
                </Typography>
              </form>
              <div className="other-links">
                <Link to="#" title="Privacy Policy" className="custom-link">
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  title="Terms and Condition"
                  className="custom-link"
                >
                  Terms and Condition
                </Link>
                <Link to="#" title="Help" className="custom-link">
                  Help
                </Link>
              </div>
              <Hidden lgUp>
                <Typography variant="body1" className="copyright-text">
                  {" "}
                  © 2021 Company. All Rights Reserved.{" "}
                </Typography>
              </Hidden>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
export default Login;
