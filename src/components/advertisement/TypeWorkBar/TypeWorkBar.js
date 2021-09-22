import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {ListGroup} from "react-bootstrap";
import AdvertisementWorkBar from "../AdvertisementWorkBar/AdvertisementWorkBar";

const TypeWorkBar = observer(() => {
    const {advertisement} = useContext(Context);

    return (

        <ListGroup>
            {advertisement.types.map(type =>
                <ListGroup.Item style={{cursor:'pointer'}}
                    active={type.id === advertisement.selectedTypes.id}
                                onClick={() => advertisement.setSelectedTypes(type)}
                                key={type.id}>
                    {type.title}

                </ListGroup.Item>)}
            <AdvertisementWorkBar/>
        </ListGroup>
    );
})

export default TypeWorkBar;
