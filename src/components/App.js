import PageContent from './PageContent';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }

  #navbar {
    background-color: #e7e7e7;
    overflow: hidden;
  }
  #navbar .links {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    display: block;
    border-radius: 8px;

    &:hover {
      background-color: grey;
      color: white;
    }
  }
  #navbar .login {
    color: black;
    border: 2px solid #e7e7e7;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 1px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    display: block;
    background-color: white;
    border-radius: 8px;    

    &:hover {
      background-color: grey;
      color: white;
    }
  }
  .right {
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    float: right;
    display: flex;
  }
  .name {
    color: black;
    text-align: center;
    text-decoration: none;
    padding: 15px;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    vertical-align: middle;
  }
  #title {
    font-family: 'Walter Turncoat', cursive;
    font-size: 5em;
    text-align: center;
  }

  .homeContainer {
    display: flex;
    justify-content: space-around;
  }

  .homeBox1 {
    padding-top: 50px;
    width: 25%;
    text-align: center;
  }

  .homeBox2 h3 {
    text-align: center;
  }

  .homeBox2 {
    width: 45%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageContent />
    </>
  );
}

export default App;
