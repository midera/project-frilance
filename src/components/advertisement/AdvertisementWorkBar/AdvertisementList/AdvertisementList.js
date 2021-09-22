import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import AdvertisementItem from "./AdvertisementItem/AdvertisementItem";

const AdvertisementList = observer(() => {
    const {advertisement} = useContext(Context);
    return (
        <Row className="d-flex">
            {
                advertisement.advertisementList.map(advertisement =>
                    <AdvertisementItem key={advertisement.id} advertisement={advertisement}/>
                )
            }
        </Row>
    );
})

export default AdvertisementList;
