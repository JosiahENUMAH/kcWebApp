import React, { useState, useEffect} from "react";
import {
  AuthBackground,
  InputFieldWrapper,
  LongButton,
} from "../../globalStyles";
import { SignUpContent, SignUpBody } from "../signup/SignUpStyled";
import Logo from "../../images/Logo.svg";
import { KBDisplayXs } from "../../components/fonts/fontSize";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { resetPassword } from "../../redux/service/authService";
import { useSelector } from "react-redux";
import { setOtp } from "../../redux/slices/otpSlice";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(null);

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  useEffect(()=>{
    if(sessionStorage.getItem("otp")){
        setOtp(sessionStorage.getItem("otp"))
    } else{
      alert('you do not have access to this page ')
      window.history.back()
    }
  },[])

  const InputType = visible ? "text" : "password";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      resetPassword(password, confirmPassword, otp);
      navigate("/login")
    } catch (error) {
      alert(error.response.data);
    } finally{
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <AuthBackground>
      <SignUpBody>
        <SignUpContent>
          <img style={{ marginTop: "5%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="bold"
            style={{ textAlign: "center", color: "#484848", marginTop: "2%" }}
          >
            Reset Password
          </KBDisplayXs>

          <Form onSubmit={handleSubmit}>
            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Create a new password"
                type={InputType}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {click ? (
                <HiOutlineEyeOff
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                  }}
                />
              ) : (
                <HiOutlineEye
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                  }}
                />
              )}
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>{otp} Confirm Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Re-enter password"
                type={"password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </InputFieldWrapper>

            <LongButton style={{ marginTop: "5%" }} type='submit'>Submit</LongButton>

          </Form>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default ResetPassword;
