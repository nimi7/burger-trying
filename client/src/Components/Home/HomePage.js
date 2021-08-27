import React, { useEffect, useReducer, useState } from 'react';
import '../Home/home.css'
import Axios from 'axios'

import Session from 'cookie-session';

export default function HomePage(props) {
    const [see, setsee] = useState(true);
    const [getUser, setGetUser] = useState([]);
    useEffect(() => {
        Axios.get('/User')
            .then(res => {

                setGetUser(res.data)
                console.log('this is server call!!!!')

            })
            .catch(err => {
                console.log(err);
            })
    }, getUser, console.log('this is server call!!!!!'))
    console.log('getUser', getUser)

    function ClickMe() {
        setsee(val => !val)
    }

    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
    console.log('process.env.PORT',process.env.PORT);
    
    console.log('process.env.URI',process.env.URI);


    return (
        <div>
            <h1> WellCome To HomePage</h1>

            <button onClick={ClickMe}>Click To Hide</button>
            {see && <h1>Shut The Fuck up sss</h1>}
            {getUser.map((props) => {
                return <div> {props.name} + {props.last} </div>
            })}
        </div>
    )
}