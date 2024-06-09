import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faMobile, faMessage, faVoicemail } from '@fortawesome/free-solid-svg-icons'
function Banner() {
    return (
        <div className='d-flex align-items-center justify-content-between  p-4 m-2' style={{ backgroundColor: "#dddddd" }}>
            <div className='d-flex flex-column col-3'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faTruckFast} className='fa-xl align-self-center' />
                </div>
                <div className='p-2 fw-bold'>Door to Door hassle Free Shipping
                </div>
            </div>
            <div className='d-flex flex-column col-3'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faMobile} className='fa-xl align-self-center' />
                </div>
                <div className='p-2 fw-bold'>Door to Door hassle Free Shipping
                </div>
            </div>
            <div className='d-flex flex-column col-3'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faMessage} className='fa-xl align-self-center' />
                </div>
                <div className='p-2 fw-bold'>Door to Door hassle Free Shipping
                </div>
            </div>
            <div className='d-flex flex-column col-3'>
                <div className='p-2'>
                    <FontAwesomeIcon icon={faVoicemail} className='fa-xl align-self-center' />
                </div>
                <div className='p-2 fw-bold'>Door to Door hassle Free Shipping
                </div>
            </div>

        </div>
    )
}

export default Banner