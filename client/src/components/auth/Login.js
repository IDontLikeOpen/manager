import React, {useContext, useState} from 'react';
import AuthState from "../../context/auth/AuthState";

const Login = () => {
    // const {} = useContext(AuthState)

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => setUser({...user, [e.target.name]: e.target.value})

    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Login</span></h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email Address</label>
                    <input type="text" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="text" name="password" value={password} onChange={onChange}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    );
};

export default Login;
