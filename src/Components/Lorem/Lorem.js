import React from 'react'
import './Lorem.css'

const Lorem = () => {
  return (
    <>
    <div className='lorem'>
      <div class="container">
        <div className='pt-5'>
            <h1 className='title-select-lorem pt-5'>Lorem Ipsum</h1>
            <p className='text-content-lorem mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
            <p className='text-content-lorem pb-5'>Lorem Ipsum and more recently with desktop .</p>
        </div>
            <div class="row">
                <div class="side-1 col-md-8"></div>
                <div class="side-2 col-md-4"></div>
            </div>

            <div class="row pb-5">
                <div class="side-2 col-md-4"></div>
                <div class="side-1 col-md-8"></div>
            </div>

      </div>
    </div>
    </>
  )
}

export default Lorem