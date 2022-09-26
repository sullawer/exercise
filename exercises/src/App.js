import React from "react";
import styled from 'styled-components'; 


const GRID=styled.div `
padding: 40px; 
display: grid; 
grid-template-columns: 100px 1fr;
grid-auto-rows: 150px; 
grid-gap:Ox; 
color: black; 
font-size: medium;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const HEADER=styled.div `
background-color: red;
grid-column: span 2;
line-height: 150px; 
text-align: center;
`
const NAVBAR=styled.div `
background-color: yellow;
grid-row: span 4; 
line-height: 600px; 
text-align: center;
`

const CONTENT=styled.div `
background-color: green;
grid-row: span 3; 
line-height: 450px; 
text-align: center;

`
const FOOTER=styled.div `
background-color: blue; 
line-height: 150px;
text-align: center;

`



function App() {
  return (
    <GRID>
      <HEADER>  <div> Header </div> </HEADER>
      <NAVBAR> Navbar </NAVBAR> 
      <CONTENT> Content </CONTENT>
      <FOOTER> Footer </FOOTER>
    </GRID>
  );
}

export default App;
