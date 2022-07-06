import './App.css';
import axios from 'axios'

function App() {
  const getNotes = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/notes'
      )
      console.log(response,"response")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <h1>Notes Application</h1>
      <div>
        <button onClick={getNotes}>
          Click me !
        </button>
      </div>
    </div>
  );
}

export default App;
