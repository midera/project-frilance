import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Nav, NavDropdown} from "react-bootstrap";


const CityBar = observer(() => {
    const {advertisement} = useContext(Context);
    return (
        <Nav className=" pl-3">
        <NavDropdown title="City" id="offcanvasNavbarDropdown">
            {advertisement.cityName.map(el =>
                <NavDropdown.Item href="#action3" key={el.id}>{el.city}</NavDropdown.Item>)}
        </NavDropdown>
    </Nav>
    )
})

export default CityBar;
