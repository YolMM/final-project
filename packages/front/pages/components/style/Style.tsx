import styled from 'styled-components';

// Divs

// *
export const StyleDiv = styled.div`
margin: 0px:
padding: 0px;
background-color: #EEF6F7;
font-size: 16px;
font-family: Arial, Helvetica, sans-serif;
`;

// Forms
export const FlexDiv = styled.div`
padding: 30px;
background-color: #F5F0EA;
display: flex;
flex-direction: column;
align-items: center;
`;

export const FormDiv = styled.div`
margin: 10px;
max-width: 200px;
display: flex;
flex-direction: column; 
justify-content: center;
`;

// Pages
export const PagesSty = styled.div`
padding: 30px;
background-color: #F5F0EA;
display: flex;
flex-direction: column;
align-items: center;
`;

// Gallery
export const GallerySty = styled.div`
margin: 30px;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`;

export const CenteredPh = styled.div`
display: flex;
align-items: center;
`;

export const PhotoWork = styled.img`
margin: 0px 30px 40px 20px;
width: 700px;
height: auto;
`;

// Menu
export const MenuSty = styled.div`
padding: 30px;
background: linear-gradient(45deg, #bc1888 0%,#cc2366 25%,#dc2743 50%,#e6683c 75%,#f09433 100%);
display: flex;
justify-content: space-evenly;
align-items: baseline;
`;

// Header
export const Header = styled.div`
padding: 30px;
background-color: #F5F0EA;
display: flex;
flex-direction: column;
`;

export const Title = styled.div`
margin-bottom: 100px;
padding-top: 30px;
display: flex;
flex-flow: row nowrap;
justify-content: center;
`;

export const WelcomeImg = styled.div`
display: flex;
justify-content: center;
`;

// Photos
export const PhotosSty = styled.div`
padding: 120px;
background-color: #F5F0EA;
display: flex;
flex-direction: column;
align-items: center;
`;

export const PhotosDiv = styled.div`
padding-top: 40px;
font-size: 16px;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`;

export const Pic = styled.img`
margin-top: 30px;
width: 700px;
height: auto;
`;

export const PhotoName = styled.div`
margin-top: 10px;
margin-bottom: 60px;
display: flex; 
flex-direction: column;
align-items: center;
`;

// Reviews
export const ReviewSty = styled.div`
padding: 1px;
background-color: #F5F0EA;
display: flex; 
flex-direction: column;
align-items: center;
`;

export const ReviewDiv = styled.div`
margin-top: 40px;
margin-bottom: 60px;
padding: 1px;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`;

export const Card = styled.div`
margin: 10px;
padding: 10px 20px;
border-radius: 6px;
background-color: #428077;
max-width: 500px;
box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.2), 1px 3px 5px 1px rgba(0,0,0,0.19);
color: black;
display: flex;
align-items: center;
`;

export const ProfPic = styled.img`
margin-right: 15px;
background-color: #EEF6F7;
border: 1px;
border-style: solid;
border-color: #453A68;
width: 150px;
height: 150px;
`;

// Footer
export const FooterSty = styled.footer`
margin: 0px;
padding: 50px;
max-width: 200rem;
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
`;

export const FootLinks = styled.div`
margin-bottom: 130px;
padding-top: 50px;
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

// About me
export const JDInfo = styled.div`
margin-top: 60px;
padding: 30px;
max-width: 80rem;
display: flex;
`;

export const JDPic = styled.img`
margin: 0px 30px 40px 20px;
width: 500px;
height: auto;
`;

// Prices
export const PricesInp = styled.div`
margin: 20px 10px 10px 0px;
`;

export const PricesTable = styled.table`
margin: 10px;
padding: 10px 20px;
border-radius: 6px;
border: 2px solid #428077;
max-width: 600px;
text-align: center;
background-color: #D3DEDC;
box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.2), 1px 3px 5px 1px rgba(0,0,0,0.19);
`;

export const TableTitle = styled.th`
padding: 10px;
text-decoration: underline #428077;
`;

export const TableElem = styled.td`
padding: 10px;
`;

// Inputs

export const FormInput = styled.input`
margin: 2px;
border: 1px;
border-radius: 2px;
border-style: solid;
border-color: #428077;
font-size: 16px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.19);
`;

export const Comment = styled.input`
margin: 2px;
border: 1px;
border-style: solid;
border-color: #428077;
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
font-size: 16px;
color: #FCFFFE;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.19);
`;

// Link

export const ALink = styled.a`
text-decoration: none;
color: #fff;
`;

// h

export const H1 = styled.h1`
    font-size: 3rem;
`;

export const H2 = styled.h2`
    font-size: 2rem;
`;
