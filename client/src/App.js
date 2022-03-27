import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Diseases from './components/diseases/Diseases';
import detailDisease from './components/diseases/detailDisease'
import { DataProvider } from './contexts/GlobalState';
import Vaccines from './components/vaccines/vaccines'
import Dangkykham from './components/dangkykham/Formdangkykham';
import DetailVaccine from './components/vaccines/detailVaccine'
import Hospital from './components/hospital/hospital';
import MyUser from './components/userFrofile/MyUser'
import Doctor from './components/doctor/doctor';


function App() {
  return (
    <AuthContextProvider>
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
            <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
            <Route exact path='/dashboard' component = {Dashboard} />
            <ProtectedRoute exact path='/diseases' component = {Diseases} />
            <ProtectedRoute path="/detail/:id" exact component={detailDisease}/>
            <ProtectedRoute exact path='/vaccines' component = {Vaccines} />
            <ProtectedRoute exact path='/detailVaccine/:id' component = {DetailVaccine} />
            <ProtectedRoute exact path='/dangkykham' component = {Dangkykham} />
            <ProtectedRoute exact path='/hospital' component = {Hospital} />
            <ProtectedRoute exact path='/user' component = {MyUser}/>
            <ProtectedRoute exact path='/doctors' component = {Doctor}/>
          </Switch>
        </Router>
      </DataProvider>
    </AuthContextProvider>
  )
}

export default App;
