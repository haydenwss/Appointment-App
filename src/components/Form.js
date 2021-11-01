import { useState, useEffect } from "react";
import Card from './Card'
import styled from "styled-components";
import { monthList, dayList, AmPm, timeList } from "../date.js";
import { db } from "../firebase-config";
import { Link, useHistory } from 'react-router-dom';
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  let history = useHistory();
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDate, setNewDate] = useState(0);
  const [newTime, setNewTime] = useState(0);
  const [newAMPM, setNewAMPM] = useState(0);
  const [newHour, setNewHour] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async (e) => {
    e.preventDefault();
    if (newName.length === 0) {
      return toast.error('please enter a name!');
    }
    if (newEmail.length === 0) {
      return toast.error('please enter a valid email!');
    }
    if (newDate === 0) {
      return toast.error('please fill in your Date!');
    }
    if (newAMPM.length === 0) {
      return toast.error('please fill in your Date!');
    }
    if (setNewTime.length === 0) {
      return toast.error('please enter a valid time!');
    } else {

      await addDoc(
        usersCollectionRef, 
        { name: newName,
          email: newEmail,  
          time: newTime, 
          date: Number(newDate),
          hour: Number(newHour),
          ampm: newAMPM,
          timestamp: serverTimestamp(),
        });
        history.push('/appt')
        return toast.success('appointment successfully created!');    
      }    
  };

  useEffect(() => {
    const getUsers = async () => {
      const q = query(usersCollectionRef, orderBy('timestamp', 'desc'));
      const data = await getDocs(q, usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, timestamp: doc.timestamp })));
    };

    getUsers();
  }, []);

  return (
    <FormWrapper>
      <ToastContainer />
      <HeroWrapper>
      <Card />
      <TextWrapper>
      <Title>Appointment Application</Title>
      <Caption>Book your appointments below</Caption>
      <input
          placeholder="Name..."
          onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
          placeholder="Email..."
          onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
     
      <select type='text' className='month-input' onChange={(event) => { setNewTime(event.target.value); }}>
          {monthList.map((mlist) => ( <option value={mlist.month}>{mlist.month}</option> ))}
      </select>
      <DateContainer>
          Date:
          <select type='text' onChange={(event) => { setNewDate(event.target.value); }}>
              {dayList.map((dlist) => ( <option value={dlist.day}>{dlist.day}</option> ))}
          </select>
          Time:
          <select type='number' onChange={(event) => { setNewHour(event.target.value); }}>
              {timeList.map((time) => ( <option value={time.hour}>{time.hour}</option> ))}
          </select>
          <select type='text' onChange={(event) => { setNewAMPM(event.target.value); }}>
              {AmPm.map((mornnight) => ( <option value={mornnight.ampm}>{mornnight.ampm}</option> ))}
          </select>
      </DateContainer>
      <Link onClick={createUser} to='/appt'>
        <button className='submit-button'> Create Appointment <i class="fas fa-check-circle"></i></button>
      </Link>

      
      
    </TextWrapper>
      </HeroWrapper>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.div `
    max-width: 500px;
    margin: auto;
`

const HeroWrapper = styled.div `
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

    input, .month-input {
      border-radius: 5px;
      padding: 5px;
      background-color:
      rgb(129, 100, 228);
      box-shadow:  2px 2px 20px #401aba;
      color: white;
      border-style: none;

      ::placeholder { /* Firefox, Chrome, Opera */
        color: white;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: white;
      }
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: white;
      }
    }

    .submit-button {
      width: 100%;
      border-style: solid;
      border-color: white;
      border-width: 1px;
      border-radius: 5px;
      background-color: transparent;
      padding: 5px 10px;
      color: white;
      box-shadow:  20px 20px 60px #401aba, -20px -20px 60px #5624fc;

      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(255, 133, 112);
          }
      
    }
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
  font-size: 15px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const DateContainer = styled.p `
  width: 100%;
  color: white;
  margin: auto;
  border-color: white;
  border-style: solid;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow:  5px 5px 30px #401aba;
  background-color: rgb(129, 100, 228);
  

  select {
    border-radius: 5px;
    background-color: transparent;
    padding: 5px;
    border-color: white;
    margin: 2px;
    color: white;
    

      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(255, 133, 112);box-shadow:  20px 20px 60px #401aba, -20px -20px 60px #5624fc;
          }
    
  }
`


