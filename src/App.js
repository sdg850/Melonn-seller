import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SellerList from './components/SellerList/SellerList';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Details from './components/Details/Details'
import { useContextSeller } from './GlobalState/Context/Seller'


function App() {

  const { isOverlay } = useContextSeller();

  return (
    <Router>
      <> { isOverlay &&
        <div className='overlay'>
          <Details className={isOverlay} />
        </div>}

      </>

      <div >
        <Switch>

          <Route exact path='/'>
            <Header />
            <SellerList />
            <Footer />
          </Route>

          <Route exact path='/form'>
            <div className='form_conteiner'>
              <Form />
            </div>
          </Route>


        </Switch>
      </div>

    </Router>
  );
}

export default App;
