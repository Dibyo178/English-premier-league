import React, { useEffect, useState } from 'react';
import HeaderDetail from '../HeaderDetails/HeaderDetail';
// import HeaderDetails from '../../../Components/Header/Header/Header';
import './Header.scss';

const Header = () => {
     
     const [fakeData,setFakeData] = useState([]);
     
     useEffect(() => {
       const url ='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
       fetch(url)
       .then(response => response.json())
       .then(data => setFakeData(data.teams))

     },[])

    return (
        <div className='body'>
              <h1 style={{color:'#15043C'}}><b>English premier League</b></h1>

              <div className='header d-flex center'> 
                {
                    fakeData.map(item => <HeaderDetail item={item}></HeaderDetail> )
                }
              </div>
            
        </div>
    );
};

export default Header;