
import  { Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import { Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Fragment } from 'react/cjs/react.production.min';
import NotFound from './pages/NotFoud';


function App() {
  return (
    <Fragment>
    <Layout>
    <Switch>

      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>

      <Route path='/quotes' exact>
        <AllQuotes></AllQuotes>
      </Route>

      <Route path='/quotes/:quoteId'>
        <QuoteDetail></QuoteDetail>
      </Route>

      <Route path='/new-quote'>
        <NewQuote></NewQuote>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
  </Switch>
  </Layout>
  </Fragment>


  );
}

export default App;
