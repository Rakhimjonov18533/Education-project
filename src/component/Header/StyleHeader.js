import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 50px;
display: flex;
background-color: rgba(29,38,42, 0.75);
padding-top: 30px;
position: absolute;
z-index: 1;
&:hover{
    background-color: rgba(100, 100, 100, 0.7);
}
`
export const A = styled.a`
font-size: 14px;
position: absolute;
color: white;
font-family: sans-serif;
left: 650px;
cursor: pointer;
&:hover{
font-weight: bold;
}
`
export const  P = styled.div`
font-size: 14px;
font-family: sans-serif;
color: white;
font-weight: 200;
margin-top: 17px;
margin-left: 20px;
`
export const T = styled.div`
font-size: 14px;
font-weight: 200;
font-family: sans-serif;
color: white;
margin-left: 20px;
margin-top: 20px;
`
export const E = styled.div`
font-size: 14px;
font-weight: 200;
font-family: sans-serif;
color: white;
margin-left: 20px;
margin-bottom: 10px;
margin-top: 20px;
`
export const B = styled.div`
width: 185px;
background-color: rgba(100, 100, 100, 0.7);
position: absolute;
top: 15px;
left: 0;
backdrop-filter: blur(10px);
display: none;
`
export const AB = styled.div`
font-size: 14px;
color: white;
position: absolute;
font-family: sans-serif;
left: 60px;
cursor: pointer;
&:hover{
font-weight: bold;
}
&:hover ${B} {
    display: block;
}
`
export const AC = styled.div`
font-size: 14px;
position: absolute;
color: white;
font-family: sans-serif;
left: 160px;
cursor: pointer;
&:hover{
font-weight: bold;
}
&:hover ${B} {
    display: block;
}
`
export const AD = styled.div`
font-size: 14px;
color: white;
position: absolute;
font-family: sans-serif;
left: 305px;
cursor: pointer;
&:hover{
font-weight: bold;
}
&:hover ${B} {
    display: block;
}
`
export const AF = styled.div`
font-size: 14px;
color: white;
position: absolute;
font-family: sans-serif;
left: 445px;
cursor: pointer;
&:hover{
font-weight: bold;
}
`
export const AG = styled.div`
font-size: 14px;
color: white;
position: absolute;
font-family: sans-serif;
left: 555px;
cursor: pointer;
&:hover{
font-weight: bold;
}
`

export const Box = styled.div`
margin-left: 400px;
position: relative;
`
export const Logo = styled.div`
font-size: 24px;
font-family: sans-serif;
font-weight: bold;
color: white;
cursor: pointer;
margin-left: 70px;
`
export const Wrapper = styled.div`
`
export const Img = styled.img`
margin-top: -100px;
width: 100%;
height: 755px;
`
export const C = styled.div``