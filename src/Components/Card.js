import React from 'react'
import uniqid from 'uniqid';
import { MiniControllerCard } from './MiniCard';


export const Card = ({ item }) => {
    const { key, id } = item

    return (
        <div className='controll_Card' key={uniqid()}>
            <h3>{id}</h3>
            <div className='controll_Card_controller'>
                {key.map((controll) => <MiniControllerCard item={controll} id={id} key={uniqid()} />)}
            </div>
        </div>
    )
}
