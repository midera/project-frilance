import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Card, Row} from "react-bootstrap";

const AdvertisementWorkBar = observer(() => {
    const {advertisement} = useContext(Context);
    return (

        <Row className="d-flex">
            {
                advertisement.advertisementWork.map(advert =>
                    <Card
                        style={{cursor:'pointer'}}
                        key={advert.id} className="p-3 text-black-50"
                          onClick={() => advertisement.setSelectedAdvertisementWork(advert)}
                    border={advert.id === advertisement.selectedAdvertisementWork.id ? 'danger':'light'}>
                        <li>{advert.title}</li>

                    </Card>)
            }
        </Row>

    );
})

export default AdvertisementWorkBar;
