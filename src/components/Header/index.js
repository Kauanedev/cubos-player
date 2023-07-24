import './style.css';
import logo from '../../assets/logo.svg'
import profile from '../../assets/eu.jpg'

function Header() {



    return (

        <div className="container">

            <header>

                <div className='logo'>
                    <img
                        src={logo}
                        alt='Logo Cubos Player' />
                </div>

                <div className='profile'>
                    <img
                        src={profile}
                        alt='user profile' />

                    <h7>Bem vinda, Kauane</h7>

                </div>
            </header >
        </div >

    );

}


export default Header;
