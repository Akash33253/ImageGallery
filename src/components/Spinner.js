import React from 'react'

export default function Spinner(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className={`spinner-border ${props.mode==='dark'?'text-light':'text-dark'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
