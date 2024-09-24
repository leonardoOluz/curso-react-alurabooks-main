import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory({ window })

function App() {
  return (<HistoryRouter history={history}>
    <Rotas />
  </HistoryRouter>
  );
}

export default App;
