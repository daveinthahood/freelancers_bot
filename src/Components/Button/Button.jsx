import React from "react"
import "./button.css"


export const Button = ({type, title, diseable, onClick }) => {
    return (
        <>
            <button className={`btn ${
                (type === 'add' && "add") ||
                (type === "remove" && "remove") || 
                (type === "checkout" && "checkout") 
            }`} diseable={diseable}
                onClick={onClick}
            >
                {title}
            </button>
        </>
    )
}