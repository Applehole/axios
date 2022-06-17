import React, { useState, useEffect } from 'react';
import axios from "axios"
import Users from './components/users';
import "./styled/app.css"

function App() {

  const [data, setData] = useState("") // 받아온 데이터를 담기위해서 썼다.
  const [adressNum, setAdressNum] =useState(1) // 첫 데이터는 1번 페이지이고

  useEffect(() => { // useEffect를 써서 주소록을 클릭해서 바뀌게 할때만 받아오게 했다.
    axios.get(`https://reqres.in/api/users?page=${adressNum}`)
      .then((res) => {
        setData(res.data.data)
      })
  }, [adressNum])// 디펜던시에는 클릭을 해서 바뀌면 데이터가 받아오게 변수를 넣어줬다.

  const firstButtonClick = () =>{
    setAdressNum(1) // 1번을 선택하면 1번으로 그리고 리렌더링
  }
  const secondButtonClick = () =>{
    setAdressNum(2) // 같은 방법으로 2번 리렌더링된다.
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
