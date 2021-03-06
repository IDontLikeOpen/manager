import React, {useContext, useState, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Login = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { loginUser, error, clearErrors, isAuthed } = authContext;

    useEffect(() => {
        if (isAuthed) {
            props.history.push('/');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthed, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if(email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            loginUser({
                email,
                password
            })
        }
    }

    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Login</span></h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email Address</label>
                    <input type="text" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    );
};

export default Login;
