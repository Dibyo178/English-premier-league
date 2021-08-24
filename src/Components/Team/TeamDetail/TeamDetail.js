import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import TeamInfo from '../TeamInfo/TeamInfo';
import './TeamDetail.scss';
const TeamDetail = () => {
 
     const {id}= useParams();

     const [info,setInfo] =useState([]);
    const [data,setData] = useState([]);
        // console.log(data);

    //  console.log(info)

     useEffect(() => {
      const url= `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
      fetch(url)
      .then(response => response.json())
      .then(data=>setInfo(data.teams[0]))

     },[id])

     useEffect(() => {
        const url= `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data=>setData(data.teams))
  
       },[id])

    return (
        <div className='body'>

            {/* <h1>Hello Team :{id} </h1> */}
            <img style={{width:'200px'}} src={info.strTeamBadge} alt="" />

            <div className='middle'>
               <div className='details'>
                {
                    data.map(item=><TeamInfo key={item.idTeam} item={item}></TeamInfo>)
                }
               </div>
               <p style={{marginTop:'20px',color:'white'}}>{info.strDescriptionEN}</p>
                <Footer/>
            </div> 
        </div>
    );
};

export default TeamDetail;