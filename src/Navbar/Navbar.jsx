
import Accessory from '../Components/Accessory'
import Cart from '../Components/Cart'
import Ipad from '../Components/Ipad'
import Iphone from '../Components/Iphone'
import Logo from '../Components/Logo'
import Mac from '../Components/Mac'
import Store from '../Components/Store'
import Support from '../Components/Support'


const Navbar = () => {
    return (
        <nav className='bg-grey-500 flex justify-center items-center gap-8  '>
            <Logo />
            <Store />
            <Mac />
            <Iphone />
            <Ipad />
            <Accessory />
            <Support />
            <Cart />
        </nav>
    )
}

export default Navbar