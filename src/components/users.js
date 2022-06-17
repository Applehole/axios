import React from 'react';
import '../styled/users.css'

function Users({ data }) {

const CreateRandomAge = () =>{ //새로운 값을 추가하고 싶어서 랜덤으로 값을 정하는 함수를 만들어봤다.
    let firstAge = Math.floor(Math.random()*10)//10은 안나오게 설정했다.
    let secondAge = Math.floor(Math.random()*10)
    return `${firstAge}${secondAge}`
}
// 값이 들어오기 전에 렌더링이되면 오류가 나서 데이터가 있다면 div를 보여주고
// 정상적으로 받아온다면 map 메소드를 써서 값을 보여지게 만들었다.
    return (
        <>{data !== "" ? <div className="Users">
            {data.map((el) => {
                return (
                    <div className='userContainer' key={el.id} >
                        <img src={el.avatar} alt="persons"></img>
                        <div className='userInformation'>
                            <div className='name'>Name : {el.last_name + " " + el.first_name}</div>
                            <div className='email'>Email : {el.email}</div>
                            <div className='age'> Age : {CreateRandomAge()} </div>
                        </div>
                    </div>
                )
            })}
        </div>
            : <div></div>
        }

        </>
    );
}

export default Users;