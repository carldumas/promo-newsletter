// Libraries
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// Contexts
import { CurrentUserContext } from './CurrentUserContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  );
};

export default PrivateRoute;
