import React from 'react';
import "./TextSection.css"

const TextSection = ({ title, description }) => {
    return (
        <>
            <div className='container-fluid TextSection'>
                <h3 className='first_title'>{title}</h3>
                {description.map((val) =>
                    <p className='sub_text'>{val}</p>
                )}
                <div className='iframe_section'>
                <iframe class="iframe" title="Connect" src="https://teacher.dreampotential.org/slide-home.html?lesson_id=393" frameborder="0"></iframe>
                </div>
            </div>
        </>
    )
}

export default TextSection