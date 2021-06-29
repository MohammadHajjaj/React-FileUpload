import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import History from './pages/History';
import Upload from './pages/Upload';
function App() {
  return (
    <Layout>
      <div>
        <main>
          <Switch>
            <Route path='/Upload'>
              <Upload />
            </Route>
            <Route path='/History'>
              <History />
            </Route>
            <Route path='*'>
              <Redirect to='/Upload' />
            </Route>

          </Switch>
        </main>
      </div>
    </Layout>
  );
}


export default App;

