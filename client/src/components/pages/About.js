import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const About = () => {
    return (
        <Fragment>
            <h1>About</h1>
            <p className='my-1'>
                This is my manager
            </p>
            <p className='bg-dark p'>
                <strong>Version</strong> 1.0.0
            </p>
        </Fragment>
    );
}
About.propTypes = {};

export default About;