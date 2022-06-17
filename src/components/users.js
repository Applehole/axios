import React from 'react';
import '../styled/users.css'

function Users({ data }) {

const CreateRandomAge = () =>{
    let firstAge = Math.floor(Math.random()*10)
    let secondAge = Math.floor(Math.random()*10)
    return `${firstAge}${secondAge}`
}

    return (
        <>{data !== "" ? <div className="Users">
            {data.map((el) => {
                return (
                    <div className='userContainer' key={el.id} >
                        <img className='photo' src={el.avatar} alt="My Image"></img>
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