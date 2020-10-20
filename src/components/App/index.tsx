import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import firebase from '../Firebase'
import AdminPanel from '../AdminPanel'
import DevelopmentExperience from '../DevelopmentExperience'
import FuturePlans from '../FuturePlans'
import ExpertiseSharing from '../ExpertiseSharing'
import SphereOfInfluence from '../SphereOfInfluence'
import SystemsEngineering from '../SystemsEngineering'
import PioneeringAndInnovation from '../PioneeringAndInnovation'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={() => <Login />} />
                <PrivateRoute exact path="/" component={() => <Home />} />
                <PrivateRoute exact path="/admin" component={() => <AdminPanel />} />
                <PrivateRoute exact path="/development-experience" component={() => <DevelopmentExperience />} />
                <PrivateRoute exact path="/sphere-of-influence" component={() => <SphereOfInfluence />} />
                <PrivateRoute exact path="/systems-engineering" component={() => <SystemsEngineering />} />
                <PrivateRoute exact path="/expertise-sharing" component={() => <ExpertiseSharing />} />
                <PrivateRoute exact path="/pioneering-and-innovation" component={() => <PioneeringAndInnovation />} />
                <PrivateRoute exact path="/future-plans" component={() => <FuturePlans />} />
            </Switch>
        </Router>
    )
}

const PrivateRoute = ({ component: Component, ...rest }: Record<string, any>) => (
    <Route
        {...rest}
        render={(props) =>
            firebase.auth().currentUser ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
)

export default App
