import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { useHistory } from 'react-router';
import styled from 'styled-components';
import AppointmentCard from '../components/AppointmentCard';
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    query,
    orderBy
  } from "firebase/firestore";

const AppointmentComponent = () => {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    let history = useHistory();

    useEffect(() => {
        const getUsers = async () => {
          const q = query(usersCollectionRef, orderBy('timestamp', 'desc'));
          const data = await getDocs(q, usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, timestamp: doc.timestamp })));
        };
    
        getUsers();
      }, []);

      const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        history.push('/')
      };


    return (
        <AppointmentWrapper>
            <CardWrapper>
                <AppointmentCard />
                <TextWrapper>
            <Title>Appointments</Title>
            {users.length === 0 ? (
              <div>
                <CardInfo>
                  <Caption>no appointments yet...</Caption> 
                </CardInfo>
              </div>
            ) : (
              <div>
                {users.map((user) => (
                 
                  <CardInfo key={user.name}>
          
                    <button
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      {" "}
                      <i class="fas fa-trash fa-lg"></i>
                    </button>
                <DateInfo key={user.timestamp}>{user.date} {user.time}</DateInfo>
                <Info key={user.timestamp}>Name: {user.name}</Info>
                <Info key={user.timestamp}>Email: {user.email}</Info>
                <Info key={user.timestamp}>Time: {user.hour} {user.ampm} </Info>
              </CardInfo>
            
            ))}
          </div>
        )}
        </TextWrapper>
        </CardWrapper>
      </AppointmentWrapper>
    )
}

export default AppointmentComponent


const AppointmentWrapper = styled.div `
    max-width: 500px;
    margin: auto;
`

const CardWrapper = styled.div `
    display: grid;
    max-width: 1234px;
    grid-template-columns: 360px auto;
    gap: 60px;
    padding: 220px 20px 0px;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
`

const TextWrapper = styled.div `
    position: relative;
    display: grid;
    gap: 20px;

    input {
      border-radius: 5px;
      padding: 5px;
    }
`

const Info = styled.p `
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: white;
`

const DateInfo = styled.p `
  font-size: 30px;
  font-weight: 400;
  line-height: 140%;
  color: rgb(255, 133, 112);
`

const Title = styled.h1 `
    max-width: 500px;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 72px;
    color: white;
    mix-blend-mode: normal;
    text-shadow: 0px 20px 40px rgba(0,0,0,0.3);
`

const Caption = styled.p `
  font-size: 25px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const CardInfo = styled.p `
    border-style: solid;
    border-color: white;
    padding: 20px;
    margin-top: 20px;
    border-radius: 15px;
    display: relative;
    box-shadow:  5px 5px 20px #401aba, -5px -5px 20px #5624fc;
             

      button {
        background-color: transparent;
        border-style: none;
        color: rgb(255, 133, 112);
        position: absolute;
        right: 30px;

          :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
      }
`





