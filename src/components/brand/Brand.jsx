import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopfy} from './imports';

const Brand = () => {
  return (
   <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopfy} alt="shopfy" />
      </div>
   </div>
  )
}

export default Brand;