import './App.css';
import { useRef } from 'react';

function App() {
  const nameRef = useRef<HTMLInputElement>(null)
  const feedbackRef = useRef<HTMLInputElement>(null)
  const ratingRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(nameRef.current?.value, feedbackRef.current?.value, ratingRef.current?.value);
  }
  return (
    <div className="App">
      <h1>Feedback-App</h1><form onSubmit={handleSubmit}>
        <input className='mb-2' required type="text" placeholder='name' ref={nameRef} />
        <br />
        <input className='mb-2' required type="text" placeholder='feedback' ref={feedbackRef} />
        <br />
        <input required type="number" placeholder='rating'  ref={ratingRef} />
        <br />
        <button type='submit' className='btn btn-outline-primary mt-2'>submit</button>
      </form>
    </div>
  );
}

export default App;
