import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Landing from './components/layout/Landing'
import Auth from './View/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './View/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
      <Router>
      <Switch>
        <Route exact path = '/' component ={Landing} />
        <Route exact path = '/login' render={props => <Auth {...props} authRoute = 'login'/>} />
        <Route exact path = '/register' render={props => <Auth {...props} authRoute = 'register'/>} />
        <ProtectedRoute exact paht = '/dashboard' component={Dashboard} />
      </Switch>
  </Router>
    </AuthContextProvider>
  )
}

export default App;
