import React from 'react';
import { Modal } from "react-bootstrap";
import './CenteredModal.css'

const CenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <div className='title-section'>
                    <a href="http://repicture.com/" target="_blank" class="modal-title">{props.modalcontent?.title} </a>
                </div>
                <div className='close-btn' onClick={props.onHide}>X</div>
                {(props.modalcontent?.discription || []).map((val, index) =>
                    <p key={index} className='discription'>
                        {val}
                    </p>
                )}
                {props.modalcontent?.buttonText &&
                <>
                    <div className='site-btn'>{props.modalcontent?.buttonText}</div>
                    <img src='https://www.dreampotential.org/images/ChiropractorTechPic.png' className='site-img'/>
               </>
                }
                {props.modalcontent.videoURL &&
                    <video className='video_control' controls>
                        <source src={props.modalcontent.videoURL} type="video/mp4"/>
                    </video>
                }
               {props.modalcontent.iframe && 
                <iframe title="youtube video" width="560" height="315" src="https://www.youtube.com/embed/E7wJTI-1dvQ" frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
                className='iframe_control'
        />
        }
       
            </Modal.Body>
        </Modal>
    );
}
export default CenteredModal