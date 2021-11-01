import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src='images/calendar.svg' alt='calendar logo' />
                <Link to='/appt'><button className='submit-button'>View Appointments <i class="fas fa-arrow-right"></i></button></Link>
            </ImageWrapper>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div `
    width: 360px;
    height: 480px;
    border-radius: 15px;
    display: relative;
    background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
    box-shadow:  20px 20px 60px #401aba, -20px -20px 60px #5624fc;

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