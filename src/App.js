import './App.css';
import validator from 'validator';

import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { useState, useEffect } from 'react';

function App() {
  const BASE_URL = "https://afroverse-whitelist.onrender.com/";
  const [message, setMessage] = useState({validilityError: '', validitySuccess: ''});
  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (e) => {
    e.preventDefault();
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setIsValid(false);
      setMessage({...message, validitySuccess: 'valid email...', validilityError: ''});
    } else {
      setIsValid(true);
      setMessage({...message, validilityError: 'Please enter a valid email and try again...', validitySuccess: ''});
    }
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    
    setMessage('');

    try{

      if(value === "") setIsValid(true);

      const response = await fetch(`${BASE_URL}api/add-awaiting-user`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: value,
        })
      })

      const data = await response.json();

      if(data.status === 'ok') {
        setValue('');
        setSuccess(data.message);
        setSubmit(true)
      }
  
    }catch(error){
      setSuccess(error)
      setMessage({...message, validilityError: 'Network error: pls check your network and try again', validitySuccess: ''})
    }
  };

 useEffect(() => {
  if(submit){
    setTimeout( () => setSubmit(false), 3000);
  }
 }, [submit])

  return (
    <div className='whitelist--page'>
      <div className='whitelist--content'>
        <div className='whitelist--form'>
          <h3>Join early waitlist to qualify for $100 Early Bird NFTs</h3>
          <h1>
            Join the Waitlist for <span>AfroVerse</span>
          </h1>
          <p>
            A virtual museum and NFT marketplace for African arts, explore,
            mint, auction & trade, and learn about African culture
          </p>

          {submit && (<p style={{background: "#98FB98", color: "black", padding: ".5rem", border: "2px solid green" , borderRadius: "5px"}}>{success}</p>)}
          
           {!submit && 
          (<div className='form--input'>
            <div className='for--input'>
              <BiLogoGmail style={{ fontSize: '20px', color: '#fff' }} />
              <input
                id='email'
                type='email'
                name='email'
                value={value}
                placeholder={'Email Address'}
                onChange={(e) => {
                  validateEmail(e);
                  setValue(() => e.target.value);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '15px',
                  width: '70%',
                }}
              />
            </div>
            {message.validilityError && (<p style={{background: "orange", color: "black", padding: ".5rem", border: "2px solid red" , borderRadius: "5px"}}>{message.validilityError}</p>)}
            {message.validitySuccess && (<p style={{background: "#98FB98", color: "black", padding: ".5rem", border: "2px solid green" , borderRadius: "5px"}}>{message.validitySuccess}</p>)}

            <button type='submit' style={{cursor: "pointer"}} disabled={isValid} onClick={onSubmitEmail}>
              Join the waitlist
            </button>
          </div>)}
          
          <div className='social--icon'>
            <div className='footer--icon'>
              <a href='https://linkedin.com/company/afroverse'>
                <BiLogoLinkedinSquare className='react--icon-text' />
              </a>
            </div>
            <div className='footer--icon'>
              <a href='https://twitter.com/afroverseapp'>
                <BiLogoTwitter className='react--icon-text' />
              </a>
            </div>
            <div className='footer--icon'>
              <a href='https://www.instagram.com/afroverseapp'>
                <BiLogoInstagram className='react--icon-text' />
              </a>
            </div>
            <div className='footer--icon'>
              <a href='mailto:afroverseapp@gmail.com'>
                <BiLogoGmail className='react--icon-text' />
              </a>
            </div>
          </div>
        </div>
        <div className='side--image'>
          <img
            src='./pana.png'
            alt="pana--pic"
            className='page--image'
            style={{ width: '500px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
