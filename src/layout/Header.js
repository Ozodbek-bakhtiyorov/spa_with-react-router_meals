import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <Content>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <Link to='/' className="brand-logo">TheBest</Link>
                    <Link to="" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact' >Contact</Link></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to='/movies/12'>Movies</Link></li>
                        <li className="tab"><Link className="active" to='/'>Test 2</Link></li>
                        <li className="tab disabled"><Link to='/'>Disabled Tab</Link></li>
                        <li className="tab"><Link to='/'>Test 4</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
            </ul>
        </Content>
    )
}
const Content = styled.div``;