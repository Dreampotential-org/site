import React from 'react'
import './JoinUs.css'

const JoinUs = ({onClick}) => {
  return (
    <>
        <div className='container'>
            <div className='row'>
            <h1 className='title-select-joinus pt-5'>Lorem Ipsum</h1>
                <p className='text-content-joinus mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p className='text-content-joinus pb-5'>Lorem Ipsum and more recently with desktop .</p>
            </div>
            <div className='joinus-btn pb-5'>
                <button type="button" className="btn-join btn-primary" onClick={onClick}>JOIN US</button>
            </div>
        </div>
    </>
  )
}

export default JoinUs