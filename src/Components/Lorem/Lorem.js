import React from 'react'
import './Lorem.css'

const Lorem = () => {
  return (
    <>
       <div class="container">
            <h1 className='title-select mt-5'>Lorem Ipsum</h1>
            <p className='text-content mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
            <p className='text-content'>Lorem Ipsum and more recently with desktop .</p>

            <div class="row">
                <div class="side-1 col-8"></div>
                <div class="side-2 col-4"></div>
            </div>

            <div class="row">
                <div class="side-2 col-4"></div>
                <div class="side-1 col-8"></div>
            </div>


        </div>
    </>
  )
}

export default Lorem