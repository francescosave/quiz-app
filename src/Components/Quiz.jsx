import React from 'react'


const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>Wich device is required for internet connection?</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>Lan cable</li>
        <li>Pen drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz