import React from 'react'
import styled from 'styled-components';
import AppointmentComponent from '../components/AppointmentComponent';

const Appointments = () => {
  return (
        <Wrapper>
          <AppointmentComponent />
        </Wrapper>
  )
}

export default Appointments

const Wrapper = styled.div `
    height: 1247px;
    width: 100%;
    background-image: linear-gradient(to bottom right, #4316db, #9076e7);
`

