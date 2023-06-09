import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavLogoStrong,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
    } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><NavLogoStrong>Green</NavLogoStrong>Bank</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={550} spy={true} exact='true' offset={-80}>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} duration={550} spy={true} exact='true' offset={-80}>Explorar</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={550} spy={true} exact='true' offset={-80}>Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} duration={550} spy={true} exact='true' offset={-80}>Cadastre-se</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Entrar</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar