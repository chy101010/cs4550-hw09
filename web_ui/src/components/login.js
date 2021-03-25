import { api_login } from "../api";
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";

// Router
import { Link } from 'react-router-dom';

// Storage
import { useSelector } from 'react-redux'

export default function Login() {
    const new_user = useSelector(state => state.user);
    const email = new_user.email || "";
    const [user, setUser] = useState({email: email, password: ""});


    function onSubmit(ev) {
        ev.preventDefault();
        api_login(user.email, user.password);
    }

    function update(field, ev) {
        let u1 = Object.assign({}, user);
        u1[field] = ev.target.value;
        setUser(u1);
    }

    return(
        <div>
            <h2>Login</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={(ev) => update("email", ev)} value={user.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(ev) => update("password", ev)} value={user.password}/>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
                <Link to="/register">Register</Link>
            </Form>
        </div>
    )
}