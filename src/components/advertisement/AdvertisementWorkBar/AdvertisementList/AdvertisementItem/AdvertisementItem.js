import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../../../../../assets/star.png";
import {useHistory} from "react-router-dom";
import {PROFILE_ROUTE} from "../../../../../utils/consts";

const AdvertisementItem = ({advertisement}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() =>history.push(PROFILE_ROUTE + '/' + advertisement.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={advertisement.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">

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
