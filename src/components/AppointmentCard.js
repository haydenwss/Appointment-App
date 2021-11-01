import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppointmentCard = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src='images/nurse.svg' alt='calendar logo' />
                <Link to='/'><button className='submit-button'><i class="fas fa-arrow-left"></i> Make Appointment</button></Link>
            </ImageWrapper>
        </Wrapper>
    )
}

export default AppointmentCard

const Wrapper = styled.div `
    width: 360px;
    height: 480px;
    border-radius: 15px;
    display: relative;
    background: 
     radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
    box-shadow:  10px 10px 40px #6e55c2,
             -05px -05px 20px #9473ff;

    .submit-button {
      width: 100%;
      border-style: solid;
      border-color: white;
      border-width: 1px;
      border-radius: 5px;
      background-color: transparent;
      padding: 5px 10px;
      color: white;
      margin-top: 60px;

      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(255, 133, 112);
          }
      
    }
`

const ImageWrapper = styled.div `
    width: 100%;
    height: auto;
    padding: 140px 40px;
    

    img {
        width: 100%;
        height: auto;
        
    }
`