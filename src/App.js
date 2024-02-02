import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row , Col , Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[])

  return (
    <div style={{backgroundColor:"#272B33"}}>
    <Container>
      <Row>
        {
          data.map((ele,ind) => {
              return(
                <Col xs={12} lg={6}>
                  <div key={ind} className='d-flex my-4' style={{borderRadius:"10px", backgroundColor:"#3C3E44"}}>
                    <img src={ele.image} className='object-fit-cover' style={{width:"250px", borderRadius:"10px 0 0 10px"}}></img>
                    <div className='ps-3' style={{marginTop:"10px"}}>
                      <h3 className='name' >{ele.name}</h3>
                      <div >     
                        <h6 style={{color:"#fff", lineHeight:0.7}}>{ele.status} - {ele.species}</h6>
                      </div>

                      <p style={{color:"#9E9E9E", marginTop:"20px"}}>Last known location:</p>
                      <h6 className='location'>{ele.origin.name}</h6>
                      <p style={{color:"#9E9E9E", marginTop:"20px"}}>First seen in:</p>
                      <h6 className='seen'>{ele.location.name}</h6>
                    </div>
                  </div>
                </Col>
              )
          })
        }
      </Row>
    </Container>
    </div>
  );
}

export default App;
