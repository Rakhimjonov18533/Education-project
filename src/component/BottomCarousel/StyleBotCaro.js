import styled from "styled-components";
import {UserDetail} from '@styled-icons/boxicons-solid/UserDetail'
import {ChalkboardTeacher} from '@styled-icons/fa-solid/ChalkboardTeacher'; 
import {School} from '@styled-icons/boxicons-solid/School';
import {NavigateNext} from '@styled-icons/material/NavigateNext';
import {NavigateBefore} from '@styled-icons/material/NavigateBefore';


export const Container = styled.div`
width: 100%;
height: 240px;
background-color: #031039;
`
export const Left = styled.div``
export const Before = styled(NavigateBefore)`
width: 60px;
position: absolute;
height: 60px;
color: white;
top: 615px;
`
export const Next = styled(NavigateNext)`
width: 60px;
height: 60px;
color: white;
position: absolute;
top: 615px;
right: 0;
`
export const Right = styled.div`
color: white;
font-size: 14px;
font-family: sans-serif;
margin-left: 20px;
`
export const Boxx = styled.div`
display: flex;
margin-left: 60px;
margin-top: 70px;
transform: scale(0.9);
`
export const Top = styled.div`
font-size: 18px;
color: white;
font-family: sans-serif;
`
export const StudentIcon = styled(UserDetail)`
width: 50px;
height: 50px;
color: white;
margin-top: 10px;
transform: scale(1.8);
`
export const TeacherIcon = styled(ChalkboardTeacher)`
width: 50px;
height: 50px;
color: white;
margin-top: 10px;
margin-right: 10px;
transform: scale(1.8);
` 
export const SchoolIcon = styled(School)`
width: 50px;
height: 50px;
color: white;
margin-top: 10px;
transform: scale(1.8);
` 