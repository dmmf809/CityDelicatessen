import Main from './components/Main/Main';
import Pizza from './components/Pizza/Pizza';
import { GlobalStyles } from './globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { pizzaData } from './components/Pizza/pizza-data.js';
import Sandwich from './components/Sandwiches/Sandwich';
import { sandwichData } from './components/Sandwiches/sandwich-data';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router basename='/react-pizza-place'>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/menu' component={Pizza}>
            <Pizza data={pizzaData} heading={'Choose your favourite'} />
            <Sandwich data={sandwichData} heading={'Which Sandwich'} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
