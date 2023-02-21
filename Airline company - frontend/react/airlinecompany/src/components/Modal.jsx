import React, { useEffect } from "react";
import "./Modal.css";
import { useState } from "react";
import axios from "axios";

function Modal({token, closeModal, flightID }) {

    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const handleAdultChange = adultEvent => {
        console.log(adultEvent.target.value)
        setAdult(adultEvent.target.value)
    }
    const handleChildrenChange = childrenEvent => {
        console.log(childrenEvent.target.value)
        setChildren(childrenEvent.target.value)
    }
    function handleBookFlight() {
        const a = parseInt(adult)
        const c = parseInt(children)
        console.log(token)

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/reserve?flight_id='+ flightID+'&number_of_children='+ c +'&number_of_adults='+a, //flight id 6 dok ne skonam kako da izvucem iz datatable
            headers: {
                Authorization: 'Bearer ' + token
            },
        };

        axios(config)
            .then(function (response) {

                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    useEffect(()=>{
        console.log(flightID)
    })

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-button">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Fill out the form below to book this flight.</h1>
                </div>
                <div className="modal-body">
                    <form className="modal-form" action="">
                        <p>Number of adults</p>
                        <input type="text" placeholder="Number of adults" onChange={handleAdultChange} value={adult} />
                        <p>Number of children</p>
                        <input type="text" placeholder="Number of children" onChange={handleChildrenChange} value={children} />
                    </form>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button onClick={handleBookFlight}>Book Flight</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;