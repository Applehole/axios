import React, { useState, useEffect } from 'react';
import axios from "axios"
import Users from './components/users';
import "./styled/app.css"

function App() {

  const [data, setData] = useState("")
  const [adressNum, setAdressNum] =useState(1)

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${adressNum}`)
      .then((res) => {
        setData(res.data.data)
      })
  }, [adressNum])

  console.log(data)
  const firstButtonClick = () =>{
    setAdressNum(1)
  }
  const secondButtonClick = () =>{
    setAdressNum(2)
  }

  return (
    <div className="App">
      <div className='option'>
        <div className='first'  onClick={firstButtonClick}>1번주소록</div>
        <div className='second' onClick={secondButtonClick}>2번주소록</div>
      </div>
      <Users data={data} />
    </div>
  );
}

export default App;
