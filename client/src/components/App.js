// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import AdminDashboard from './AdminDashboard';
import ContactUs from './ContactUs';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import GlobalStyles from './GlobalStyles';
import PrivateRoute from './PrivateRoute';
import AdminSignIn from './AdminSignIn';
import Loader from './Loader';
import { CurrentUserContext } from './CurrentUserContext';

const App = () => {
  const { status } = useContext(CurrentUserContext);
  return !status ? (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Loader />
        </Main>
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </Router>
  ) : (
    <>
      <Router>
        <Wrapper>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/register">
                <RegistrationForm />
              </Route>
              <PrivateRoute exact path="/admin" component={AdminDashboard} />
              <Route exact path="/signin" component={AdminSignIn} />
              <Route exact path="/terms-and-conditions">
                <TermsAndConditions />
              </Route>
              <Route exact path="/privacy-policy">
                <PrivacyPolicy />
              </Route>
              <Route exact path="/contact-us">
                <ContactUs />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Main>
          <Footer />
          <GlobalStyles />
        </Wrapper>
      </Router>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  width: 97%;
  padding: 60px;
`;

export default App;
