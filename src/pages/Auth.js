import React from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <h2 className="m-auto">{isLogin ? 'Sing In' : 'Create an account'}</h2>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ? <div>
                        New to Freelance&Build?<NavLink to={REGISTRATION_ROUTE}> Create an account!</NavLink></div>
                        :<div>
                            Have an account login?<NavLink to={LOGIN_ROUTE}> Sing In</NavLink>
                        </div>
                    }
                </Row>
                <Button variant="primary" type="submit">
                    {isLogin ? "Sing In" : "Sing Up"}
                </Button>
            </Form>
        </Container>
    );
};

export default Auth;
