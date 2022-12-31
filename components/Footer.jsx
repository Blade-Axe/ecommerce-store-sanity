import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Rival Clothing All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillYoutube />
      </p>
    </div>
  )
}

export default Footer