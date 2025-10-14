import LogoRimacHeader from '../../assets/images/Logo.png'

function Header(){
    return(
        <>
        <div className="Header">
          <img src={LogoRimacHeader} alt="logo-rimac" />
          <p><span className='change'>¡Compra por este medio!</span> (01) 411 6001</p>
        </div>
      </>
    )
}

export default Header;