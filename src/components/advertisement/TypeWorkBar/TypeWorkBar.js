import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {ListGroup, NavDropdown} from "react-bootstrap";
import AdvertisementWorkBar from "../AdvertisementWorkBar/AdvertisementWorkBar";



const TypeWorkBar = observer(() => {
    const {advertisement} = useContext(Context);

    return (
        <ListGroup>
            {advertisement.types.map(type =>
            <NavDropdown title="Type of Work" id="basic-nav-dropdown" style={{cursor:'pointer'}}
                active={type.id === advertisement.selectedTypes.id}
                onClick={() => advertisement.setSelectedTypes(type)}
                key={type.id}>  {type.title}
                <NavDropdown.Item href="#action/3.1" >
                    <AdvertisementWorkBar/>
                </NavDropdown.Item>
            </NavDropdown>)}

        </ListGroup>
    );
})

export default TypeWorkBar;
