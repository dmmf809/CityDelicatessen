import Main from './components/Main/Main';
import Pizza from './components/Pizza/Pizza';
import { GlobalStyles } from './globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { pizzaData } from './components/Pizza/pizza-data.js';
import Sandwich from './components/Sandwiches/Sandwich';
import { sandwichData } from './components/Sandwiches/sandwich-data';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/menu' component={Pizza}>
            <Pizza data={pizzaData} heading={'Choose your favourite'} />
          </Route>
        </Switch>
        <Sandwich data={sandwichData} heading={'Which Sandwich'} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
