import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later

// import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
    //children le <checkout/> liyo ani rest le exact path bhanne liyo

    const { user } = useAuth0();
    return (
        <Route
            {...rest}
            render={() => {
                return user ? children : <Redirect to='/'></Redirect>;
            }}></Route>
    );
};
//with msg

// export default withAuthenticationRequired(PrivateRoute, {
//     // Show a message while the user waits to be redirected to the login page.
//     onRedirecting: () => <div>Redirecting you to the login page...</div>,
// });

export default PrivateRoute;
