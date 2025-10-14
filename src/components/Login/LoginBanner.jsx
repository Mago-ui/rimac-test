import React from 'react'
import imagenGirlT from '../../assets/images/Frame.svg'
import imagenBlur from '../../assets/images/blur-asset.png'


function LoginBanner() {
        return (
            <div className="Login__banner">
                <img src={imagenBlur} className='Login__banner-imgBlur' alt="img-borde"/>
                <div className="Login__banner-nav">
                </div>
                <div className="Login__banner-text">
                   <img className="Login__img--Two" src={imagenGirlT} alt="girl" />
                </div>
            </div>
        ) 
    
}

export default LoginBanner