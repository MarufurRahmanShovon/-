import styled from "styled-components";

import React,{useEffect, useState} from 'react'
import axios from "axios";


import { Link } from 'react-router-dom';

import {login} from "../redux/apiCall"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from "react-router";

const Container = styled.div`
          width: 100vw;
          height:100vh;
        //   background:url('') center;
          background-color: coral ;
          background-size:cover;
          display:flex;
          overflow:hidden;
          flex-direction: column;
          align-items: center ;
          justify-content: center;
          position: relative;
`
const GlassBack = styled.div`
          opacity:0.7;
          background-color:white;
          height:60vh;
          border-radius: 15px;
          width: 370px;
          position: absolute;
          z-index: 2;
`

const Wrapper = styled.div`
          width: 300px;
          padding: 40px;
          position: absolute;
          z-index: 3;
`;

const Title = styled.h1`
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: 800;
          text-align:center;

`;

const Form = styled.form`
          display: flex;
          flex-direction:column;
          align-items: center;
          justify-content: center;
`;

const Input = styled.input`
          flex: 1;
          min-width: 70%;
          margin-top: 10px;
          padding: 10px;
          background: white;
          border: 2px solid;
          border-radius: 10px;
          font-weight: 1000;
`;

const Buttons =styled.div`
          display:flex;
          width: 60%;  
          align-items: center;
          justify-content: space-around;
          margin-top: 20px;
          margin-bottom: 20px;

`

const SecondButtons =styled.div`
          display:flex;
          width: 100%;  
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 20px;

`

const Button = styled.button`
          width: 80px;     
          border: none;
          padding: 10px 20px;
          margin-left:10px ;
          background-color: teal;
          color: white;
          cursor: pointer;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          &:disabled{ // THIS SYNTAX MEANS "IF DISABLED"
                    color:black;
                    cursor:not-allowed;
          }
`;

const ButtonTwo = styled.button` 
          width:150px;
          height:45px;
          border: none;
          padding: 2px 5px;
          margin-left:10px ;
          background-color:teal;
          color:black;
          cursor: pointer;
          border-radius: 10px;

`;

const Link2 = styled.a`
          margin: 5px 0px;
          font-size: 12px;
          text-decoration: underline;
          cursor: pointer;
`;

const Error =styled.span`
          color:red;
`

const Payment = () => {

          const [ accInfo, setAccInfo] = useState({
            username:"",
            password:"",
            amount:""
        });
    
        const handleChange = e => {
            const { name, value } = e.target
            setAccInfo({
                ...accInfo,
                [name]: value
            })
        };

          const {isFetching, error} = useSelector((state)=>state.user)

          function transection(username,password,amount){
              console.log(username,password,amount)
              //axios.put("http://localhost:4000/users/login/updateuserInfo",{username:username,password:password,balance:100})
          }
        // useEffect(()=>{
        //     getUserDetails();
        // })
        // const getUserDetails = ()=>{
            


        // }
          
    return (
        <Container>
        <GlassBack/>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input type="username" onChange={handleChange} placeholder={accInfo.username} />
        <Input type="password" onChange={handleChange} placeholder={accInfo.password} />
        <Input type="Number" onChange={handleChange} placeholder={accInfo.amount} />
        <Buttons>
                  <Button disabled={isFetching} onClick={console.log}>Payment</Button>
                  {/*  Basically at the begining "isFetching" is "false" so "disable=false" so button is enabled but when we click it  for a few moment "isFetching" goes from "false" to "true" & then "false" again, so button becomes diabled momenterily when database is getting accesed */}
        </Buttons>
        </Form>
        <SecondButtons>
        <ButtonTwo>
        <Link style={{"textDecoration":"none","color":"white"}} to ="/">
        Cancel</Link>
        </ButtonTwo>
        </SecondButtons>
        </Wrapper>
        </Container>
)

}


export default Payment;
