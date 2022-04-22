import logo from '../../assets/images/logo.png';

const Logo = () =>{
    return(
        <a href='https://www.stac.com.co/' className='container-image'>
            <img src={logo} alt='Logo de stact' className='image'/>
        </a>
    )
}

export {Logo};