import React from 'react'
import { Button, Container } from '@mui/material'
import Logo from "../assets/MarvelLogo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Container maxWidth="xl" >
            <div className="flex justify-between items-center w-full">
                <img src={Logo} alt="Marvel logo" width="150px" />
                <ul className='gap-20'>
                    <li className='flex gap-16 text-lg font-semibold'>
                        <Link className="hover:-translate-y-2 hover:text-red-700 hover:transition ease-in delay-100" to="/">Inicio</Link>
                        <Link className="hover:-translate-y-2 hover:text-red-700 hover:transition ease-in delay-100" to="/character">Personajes</Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default Navbar