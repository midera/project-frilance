import React, {useContext} from 'react';
import {Context} from "../../index";
import {Navbar, Container, Button,} from "react-bootstrap";
import {HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {NavLink,useHistory} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={HOME_ROUTE}>Freelance&Build</NavLink>
                <Navbar.Toggle/>
                {user.isAuth ? <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Profile</Button>
                        <Button variant={"outline-light"} className="ml-4">Sign In</Button>
                    </Nav>
                    : <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Sign Up</Button>

                    </Nav>}
            </Container>
        </Navbar>
    );
})

export default NavBar;
