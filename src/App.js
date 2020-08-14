import React, {useState, useEffect} from "react";
import axios from "axios";
import {BASE_URL, API_KEY} from "./constants/index"
import Footer from "./components/footer"
import Header from "./components/header"
import Body from "./components/body"


import "./App.css";



function App() {
const [image, setImage] = useState('')

useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    console.log(res.data)
    setImage(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

  return (

    <div className="App">
      <Header imageInfo={image}/>

      <Body image={image} />

      <Footer imageInfo={image}/>

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
