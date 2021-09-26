import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeWorkBar from "./TypeWorkBar/TypeWorkBar";
import AdvertisementList from "./AdvertisementWorkBar/AdvertisementList/AdvertisementList";
import CityBar from "./CityBar/CityBar";



const Advertisement = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeWorkBar/>
                </Col>
                <Col md={3}>
                    <CityBar/>
                </Col>

                <Col md={9}>
                    <AdvertisementList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Advertisement;
