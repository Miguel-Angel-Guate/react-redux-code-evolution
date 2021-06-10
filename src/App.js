import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CackeContainer';
import CounterContainer from './components/CounterContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamsContainer from './components/IceCreamsContainer';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamsContainer />
      <CounterContainer />
    </div>
    </Provider>
  );
}
export default App;
