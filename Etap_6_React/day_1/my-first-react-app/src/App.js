import './App.css';
import {useState} from "react";

function App() {
    const [firstName, setFirstName] = useState('')

    const sendForm = (e) => {
        e.preventDefault()
        console.log('Wysyłam')
    }

  return (
<form onSubmit={sendForm}>
    <input
        type="file"
    />

    <button type='submit'>Save</button>
</form>
      );
}

export default App;
