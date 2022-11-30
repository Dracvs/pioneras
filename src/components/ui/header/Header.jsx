import React from 'react'
import './header.scss'

export const Header = () => {
    return (
        <header className="wave-container ">
            <img
                className="logo"
                src="https://firebasestorage.googleapis.com/v0/b/landing-page-52729.appspot.com/o/assets%2Flogo_pioneras.png?alt=media&token=f683d663-ddc4-4a39-84d6-2aab73c8ddd2"
            />
            <h3 className="header-text">
                Hola :) Estamos trabajando en nuestra página web, y muy pronto
                podrás descubrirla 🙌
            </h3>
            <h3 className="header-text">
                Por el momento, aquí podrás conocer un poquito más de nuestra
                comunidad 👇
            </h3>
        </header>
    )
}
