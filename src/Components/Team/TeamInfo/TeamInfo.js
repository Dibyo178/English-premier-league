import React, { useState } from 'react';
import { CgGenderMale } from 'react-icons/cg';
import { FaFlag } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { TiLocationOutline } from 'react-icons/ti';
import female from '../../../Photo/female.png';
import male from '../../../Photo/male.png';
import './TeamInfo.scss';


const TeamInfo = (props) => {
    const [link,setLink] = useState([props.item])

    // const {strGender}=link[0];
    //  console.log(link[0])

    //  const gender;
    //   if()
    const {strTeam,intFormedYear,strCountry,strGender,idTeam} = props.item;

    let gender;

    if(strGender==='Male'){
        gender = <img src={male} alt=""/>
    }
    else if(strGender==='Female'){
        gender = <img src={female} alt=""/>
    }
    return (
        <div className='container d-flex'>
            <div className='col-md-6 '>
              <div className='position'>
              <h1>{strTeam}</h1>
              <h4> <TiLocationOutline/>    Founded:{intFormedYear}</h4>
              <h4> <FaFlag />  Country:{strCountry }</h4>
              <h4><IoMdFootball/>  Sport Type: Football</h4>
              <h4><CgGenderMale/>  Gender: {strGender}</h4>
              </div>
            </div>
            <div className='col-md-6'>
              
              {gender}
   
             {/* <img src={male} alt="" /> */}
            </div>
            {/* {
            //    link.map(info=><Footer key={info.idTeam} info={info}></Footer>)
            link[0].map(info=><Footer info={info}></Footer>)            } */}
        </div>

        
        
    );
};

export default TeamInfo;