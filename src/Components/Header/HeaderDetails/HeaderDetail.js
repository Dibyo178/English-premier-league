import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
const HeaderDetail = (props) => {
  // console.log(props)
  const{idTeam,strTeamBadge,strGender,strAlternate}=props.item;

  const {id} =useParams();

  const history = useHistory();

  const showTeam =id=>{
  const url=`/explore/${id}`;
  history.push(url);
  }


    return (
        <Card style={{width:'18rem',marginBottom:'20px',marginLeft:'25px' }} className='card'>
       <Card.Img variant="top" src={strTeamBadge} style={{width: '100px' ,height: '100px',marginLeft:'100px'}} />
       <Card.Body>
      <Card.Title>{strAlternate}</Card.Title>
      <Card.Text>
   
    </Card.Text>
    <Button variant="primary"  onClick={()=>showTeam(idTeam)}>Explore <BsArrowRight/></Button>
   
  </Card.Body>

</Card>


    );
};

export default HeaderDetail;