import React from 'react'

const FeedbackItem = ({item, dispatch}) => {
  return (
    <div className='col-md-4'>
        <ul key={item.id} className="border m-3 p-5">
            <li><strong>Name:</strong> {item.name}</li>
            <li><strong>Feedback: </strong>{item.feedback}</li>
            <li><strong>Rating: </strong>{item.rating}</li>
            <button className='btn btn-outline-danger mt-3' onClick={() => dispatch({type: "REMOVE", id: item.id})}>Remove</button>
        </ul>
    </div>
  )
}

export default FeedbackItem