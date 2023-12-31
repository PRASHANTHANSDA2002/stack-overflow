import React from "react";
import './otp.css'
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import OtpInput from "otp-input-react"
import './App.css'
import { useState } from "react"
import { CgSpinner } from "react-icons/cg"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { auth } from "./firebase.config"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { Toaster, toast } from "react-hot-toast"



const Otp = () => {

    const [otp , setOtp] = useState("")
    const [loading , setLoading] = useState(false)
    const [ph , setPh] = useState("")
    const [ showOTP , setShowOTP] = useState(false)
    const [user , setUser] = useState(null)




  
function onCapthVerify(){
  if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        onSignup()
      },
      'expired-callback': () => {}
    }, auth);
  }
}

function onSignup(){
  setLoading(true)
  onCapthVerify()

  const appVerifier = window.recaptchaVerifier
  const formatPh = '+' + ph
   signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
     window.confirmationResult = confirmationResult;
     setLoading(false)
     setShowOTP(true)
     toast.success('OTP sent to your mobile number')
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    });
 }
 
 function onOTPVerify(){
  setLoading(true)
  window.confirmationResult
  .confirm(otp)
  .then(async(res) => {
    console.log(res)
    setUser(res.user)
    setLoading(false)

  })
  .catch((err)=> {
    console.log(err)
    setLoading(false)
  })
 }


  return(
   <section className="otppage">
  <div className="huii">
    < Toaster toastOptions={{duration: 4000}}/>
    <div id="recaptcha-container"> </div>
   {
   user ? (<h2 className="klo"><span className="lop"> Hurray!! You are now verified .</span> <br />
  <a href="https://stackoverflwclonebyprashant.netlify.app/"> Click</a> here to continue. 
</h2> ) : 
   
   ( <div className="inner">
      <h1 className="tex">
      Hello Welcome !! <br/>
     Enter your Phone Number to Continue </h1>

      {
        showOTP ?
        <>
      <div className="yodo">
        <BsFillShieldLockFill  size={30}/>
      </div>
      <label htmlFor="otp"  className="zin">
        Enter your OTP
      </label>
      <OtpInput
       value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus className="opt-container" ></OtpInput>
       <button  onClick={onOTPVerify} className="verifybutton">
        {
            loading && < CgSpinner size={20}  className="ui"/>
        }
        
        <span>Verify Otp</span></button>
      </> 
 :
 <>
      <div className="yodo">
        <BsTelephoneFill  size={30}/>
      </div>
      <label htmlFor=" " className="zin">
      Verify Your Phone Number
      </label>
     < PhoneInput className="phonecont" country={"in"} value={ph} onChange={setPh} />
       <button onClick={onSignup} className="verifybutton">
        {
            loading && < CgSpinner size={20}  className="ui"/>
        }
        
        <span>Send Code Via SMS</span></button>
      </>

      }
       
     </div>
)
   }
    
     
  </div>
</section> )
};

export default Otp;
