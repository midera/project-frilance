import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Col, Container, Image, Row} from "react-bootstrap";

const Profile =observer (() => {
    const {advertisement} = useContext(Context);
    return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        {advertisement.profiles.map(user =><Image key={user.id} src={user.img} roundedCircle/>)}
                    </Col>
                </Row>
            </Container>

    );
});

export default Profile;
