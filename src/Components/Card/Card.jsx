import { useState } from 'react'
import './card.css'
import { Button } from '../Button/Button';



export const Card = ({items}) => {
    const [count, setCount] = useState(0)

    const {title, price, id} = items;


    const handleAdd = (event ) => {
        setCount(count +1)
    }

    const handleRem = (event) => {
        setCount(count - 1)
    }


    return (
        <>
        <div className="card">
            <span className={`${count !==0 ? 'card_badge' : 'card_badge--hidden'}`}> {count}</span>

            
                <h4 className='card_title'> {title}:
                <span className='price'> {price }</span></h4> 

                <div className="add-btn">
                    <Button title={'+'} type={'add'} onClick={handleAdd}/>
                    {count !== 0 ? (
                    <Button title={'-'} type={'remove'} onClick={handleRem}/>) : ""
                    }
                </div>
            
        </div>
        </>
    )
}