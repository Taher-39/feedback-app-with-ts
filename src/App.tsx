import './App.css';
import { useRef, useCallback, useReducer } from 'react';
import FeedbackItem from './components/FeedbackItem';


interface feedback {id: number;  name: string; feedback: string; rating: number}

type ActionType = | { type: "ADD";  name: string;  feedback: string; rating: number; } | { type: "REMOVE"; id: number }

function App() {

  const reducer = (state: feedback[], action: ActionType) => {
    switch(action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
            feedback: action.feedback,
            rating: action.rating,
          }
        ]
      case "REMOVE" :
        return state.filter((item) => item.id !== action.id)
    }
  }
  const [feedbacks, dispatch] = useReducer(reducer, [])

  const nameRef = useRef<HTMLInputElement>(null)
  const feedbackRef = useRef<HTMLInputElement>(null)
  const ratingRef = useRef<HTMLInputElement>(null)

  const callback = useCallback(
    () => {
      if(feedbackRef.current && nameRef.current && ratingRef.current) {
      dispatch({type: "ADD", feedback: feedbackRef.current?.value, name: nameRef.current?.value, rating: Number(ratingRef.current?.value)})
      nameRef.current.value = ""  
      feedbackRef.current.value = ""  
      ratingRef.current.value = ""  
    }
    }, []
  )
  const onAddFeedback = (e: any) => {
    e.preventDefault()
    callback()
  }
  return (
    <div className="App">
      <h1>Feedback-App</h1>

        <form onSubmit={onAddFeedback}>
          <input className='mb-2' required type="text" placeholder='name' ref={nameRef} />
          <br />
          <input className='mb-2' required type="text" placeholder='feedback' ref={feedbackRef} />
          <br />
          <input required type="number" placeholder='rating'  ref={ratingRef} />
          <br />
          <button type='submit' className='btn btn-outline-primary mt-2' >submit</button>
        </form>

        <div className="border rounded shadow container my-5">
          <div className="row">
            {
              feedbacks.map(item => (
                <FeedbackItem item={item} dispatch={dispatch} />
              ))
            }
          </div>
        </div>
    </div>
  );
}

export default App;
