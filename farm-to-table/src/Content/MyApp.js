import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'



const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:5%;
`


 
class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })


 
  render() {
    return (
      <div>
        <Container>
          
         <iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%237986CB&amp;ctz=America%2FDenver&amp;src=MWZsbG4yYWFkdG9lZjJqN2Nmcm5tNWNtajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;title=FARM%20TO%20TABLE%20EVENTS&amp;showPrint=0&amp;showTitle=0" width="600" height="500" frameborder="0" scrolling="no"></iframe>
         </Container> 
      </div>
    );
  }
}
        
       
export default MyApp