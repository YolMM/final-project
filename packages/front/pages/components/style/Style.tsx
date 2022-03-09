import styled from 'styled-components';

// Divs
// Forms
export const FlexDiv = styled.div`
margin: 0px;
padding: 60px;
background-color: #FBD8B3;
display: flex;
flex-direction: column;
align-items: center;
`;

export const FormDiv = styled.div`
margin: 10px;
max-width: 200px;
background-color: #EEF6F7;
display: flex;
flex-direction: column;
justify-content: center;
`;

// Reviews
export const ReviewSty = styled.div`
padding: 1px;
`;

export const Card = styled.div`
margin: 5px;
padding: 10px;
border-radius: 2px;
background-color: #D07D59;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.19);
display: flex;

`;

export const ProfPic = styled.img`
margin-right: 15px;
background-color: #EEF6F7;
border: 1px;
border-style: solid;
border-color: #453A68;
width: 150px;
`;

// Menu
export const MenuSty = styled.div`
padding: 30px;
background-color: #FBD8B3;
display: flex;
justify-content: space-evenly;
align-items: baseline;
`;

// Footer
export const FooterSty = styled.footer`
margin: 0px;
padding: 50px;
background-color: #EEF6F7;
`;

export const FootLinks = styled.div`
margin-bottom: 30px;
display: flex;
justify-content: space-evenly;
align-items: baseline;
`;

export const FootP = styled.div`
color: #A5A79A;
display: flex;
flex-direction: column;
align-items: center;
`;

// Inputs

export const FormInput = styled.input`
margin: 2px;
border: 0.5px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.19);
`;

export const Comment = styled.input`
margin: 2px;
border: 0.5px;
height: 80px;
width: 300px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.19);
`;

// Button

export const Button = styled.button`
padding: 5px 10px;
border: 1px;
border-radius: 8px;
border-color: #D4C6A8;
background-color: #B53F49;
font-size: 14px;
color: #FCFFFE;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.19);
`;

// Link

export const ALink = styled.a`
text-decoration: none;
color: #453A68;
text-shadow: 0.5px 1px #A5A79A;
`;
