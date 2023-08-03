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
            <div
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#333C4D',
                borderRadius: '8px',
              }}
            >
              <a href='https://linkedin.com/company/afroverse'>
                <BiLogoLinkedinSquare
                  style={{ fontSize: '28px', color: '#fff' }}
                />
              </a>
            </div>
            <div
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#333C4D',
                borderRadius: '8px',
              }}
            >
              <a href='https://twitter.com/afroverseapp'>
                <BiLogoTwitter style={{ fontSize: '28px', color: '#fff' }} />
              </a>
            </div>
            <div
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#333C4D',
                borderRadius: '8px',
              }}
            >
              <a href='https://www.instagram.com/afroverseapp'>
                <BiLogoInstagram style={{ fontSize: '28px', color: '#fff' }} />
              </a>
            </div>
            <div
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#333C4D',
                borderRadius: '8px',
              }}
            >
              <a href='elsheikh.saf@gmail.com'>
                <BiLogoGmail style={{ fontSize: '28px', color: '#fff' }} />
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
