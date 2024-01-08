import Navbar from '../Navbar/Navbar';
import About from '../About/About'
import Image from '../Image/Image';
import Projects from '../Projects/Projects'

function Header(){
return(
<div>
<Navbar/>
<Image />
<About />
<Projects />
</div>

)
}

export default Header;