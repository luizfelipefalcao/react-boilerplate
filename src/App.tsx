import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const response = useFetch('http://localhost:8000/users')

  return (
    <div className="App">
      <p>{JSON.stringify(response?.data, null, 4)}</p>
    </div>
  );
}

export default App;
