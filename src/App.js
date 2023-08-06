import react from 'react';
import './App.css';
import validator from 'validator';

import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  let yourAlert = { message };
  const validateEmail = (e) => {
    e.preventDefault();
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setMessage(
        'Thanks for filling out your mail!.....we will be in touch with you'
      );
    } else {
      setMessage('Please enter a valid email');
    }
  };
  const onSubmitEmail = () => {
    alert(JSON.stringify(yourAlert));
  };
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
          <div className='form--input'>
            <div className='for--input'>
              <BiLogoGmail style={{ fontSize: '20px', color: '#fff' }} />
              <input
                id='email'
                type='email'
                name='email'
                placeholder={'Email Address'}
                onChange={(e) => validateEmail(e)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '15px',
                  width: '70%',
                }}
              />
            </div>
            <button type='submit' onClick={onSubmitEmail}>
              Join the waitlist
            </button>
          </div>
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
            className='page--image'
            style={{ width: '500px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
