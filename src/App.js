import './App.css';
import AuthDetails from './component/auth/AuthDetails';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';

function App() {
  return (
    <div className="App">
      <Signin/>
      <Signup/>
      <AuthDetails/>
    </div>
  );
}

export default App;
