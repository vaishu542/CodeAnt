import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ name, img }) => {
    return (
        <Link to={"/repository"}>
            <div className="btn flex gap-4 border-2 border-hwhite justify-center py-3 rounded-lg font-semibold w-[300px] md:w-[400px] ">
                <img src={img} alt={name} />
                <button> Sign in with {name}</button>
            </div>
        </Link>
    )
}

export default Button
