import React from 'react';
import Facebook from '../../Icon/Facebook.png';
import Twitter from '../../Icon/Twitter.png';
import YouTube from '../../Icon/YouTube.png';
import './Footer.scss';
const Footer = (props) => {
    console.log(props);
//   const {strWebsite,strYoutube} =props.info;
    return (
        <div className='d-flex center footer' >
            
             <img src={Facebook} alt="" />
            <img src={Twitter}alt="" />
           <img src={YouTube} alt="" />
            
            {/* <a href={strWebsite}> <img src={Facebook} alt="" /></a> 
            <a href={strTwitter}><img src={Twitter}alt="" /></a> 
            <a href={strYoutube}> <img src={YouTube} alt="" /></a> */}
        </div>
    );
};

export default Footer;