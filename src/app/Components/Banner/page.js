import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faMobile, faMessage, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className="container-fluid p-4" style={{ backgroundColor: "#dddddd" }}>
            <div className="row text-center">
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faTruckFast} className="fa-2x mb-2" />
                        <div className="fw-bold">Door to Door Hassle Free Shipping</div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faMobile} className="fa-2x mb-2" />
                        <div className="fw-bold">Give us a call at
                            <Link href="tel:+919555413550" className="d-block">
                                +91 9555413550
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faMessage} className="fa-2x mb-2" />
                        <div className="fw-bold">Chat with Us
                            <Link href="tel:+919555413550" className="d-block">
                                +91 9555413550
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faVoicemail} className="fa-2x mb-2" />
                        <div className="fw-bold">Email Us on
                            <Link href="mailto:industrialsparesmarketplace@gmail.com" className="d-block">
                                industrialsparesmarketplace@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
