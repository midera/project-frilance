import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../../../../../assets/star.png";

const AdvertisementItem = ({advertisement}) => {
    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={advertisement.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Advertismet1</div>
                    <div className="d-flex align-items-center">
                        <div>{advertisement.rating}</div>
                    </div>
                    <Image width={18} height={18} src={star}/>
                </div>
                <div>{advertisement.title}</div>
            </Card>
        </Col>
    );
};

export default AdvertisementItem;
