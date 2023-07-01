import React from 'react'
import style from '../../Styles/login.module.css'
import { useNavigate } from 'react-router-dom'
import AppLogo from '../../Logo/GETFLIX-logo.png'


export default function Login() {
  const navigate = useNavigate();

  function showCaptchInfo() {
    document.getElementById('CaptchInfo').style.display = 'block'
    document.getElementById('HideCatchButton').style.display = 'none'
  }

  function InputOverlay(elementClass) {
    let Overlay = document.getElementsByClassName(elementClass)
    Overlay[0].style.top = '22px'
    Overlay[0].style.fontSize = '13px'

    let rememberME=document.querySelector(`.${style.AfterForm}>div>input`).checked = true;
  }

  function InputBlur(elementClass,e) {
    if(e.target.value===''){
    let Overlay = document.getElementsByClassName(elementClass)
    Overlay[0].style.top = '35px'
    Overlay[0].style.fontSize = '17px'
  
    let alertMessage=document.getElementsByClassName(`${style.passwordMessage}`)[0]
    alertMessage.style.display='none'
  }
  }

  function OverlayClick(elementId) {
    document.getElementById(elementId).focus()
  }

  function passwordValidate(e) {
    let alertMessage=document.getElementsByClassName(`${style.passwordMessage}`)[0]
    if(e.target.value.length<4){
        alertMessage.style.display='block'
    }else{
      alertMessage.style.display='none'
    }
  }


  return (
    <div style={{position:'relative'}}>
      <div className={style.loginSection}></div>
      <div className={style.mainDiv}>
        <nav>
          <p  className={style.AppLogo}><img src={AppLogo} alt="" /></p>
        </nav>


        <div className={style.FormDiv}>
          <div></div>
          <form className={style.LoginForm}>
            <h3>Sign In</h3>

            <span className={style.InputOverlay} onClick={() => OverlayClick(`userName`)}>Email or phone number</span>
            <input id='userName' type="text" 
              onFocus={(e) => InputOverlay(`${style.InputOverlay}`)}
              onBlur={(e) => InputBlur(`${style.InputOverlay}`,e)}
              required />

            <span className={style.PasswordOverlay} onClick={() => OverlayClick(`Password`)}>Password</span>
            <input id='Password' type="password" 
              onFocus={() => InputOverlay(`${style.PasswordOverlay}`)}
              onBlur={(e) => InputBlur(`${style.PasswordOverlay}`,e)}
              onChange={(e)=> passwordValidate(e)}
              required />
            <p className={style.passwordMessage}>Your password must contain between 4 and 60 characters.</p>

            <input type="submit" value='Sign In' />
            <div className={style.AfterForm}>
              <div><input type='checkbox' /> Remember me</div>
              <span>Need help?</span>
            </div>


            {/* form bottom des */}
            <div className={style.formBottom}>
              <p> New to Getflix? <b onClick={() => navigate("/signup")}>Sign up now</b>.</p>
              <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id='HideCatchButton' onClick={() => showCaptchInfo()}>Learn more.</span></p>
              <p id='CaptchInfo'>The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy">Privacy Policy</a>  and <a href="https://policies.google.com/terms">Terms of Service</a> , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
            </div>
          </form>
        </div>


        <footer className={style.footer}>
          <div className={style.FooterBlackBackground}></div>
          <div className={style.footerDiv}>
            <p>Questions? Call 000-800-919-1694</p>
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
            <div className={style.LanguageSelecter}>
              <span>&#127760;</span>
              <select>
                <option>English</option>
                <option>हिन्दी</option>
              </select>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )

}
