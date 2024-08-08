import React from 'react'

function SuccessMassage(props) {
    return (
        <>
            <div className='position-fixed'>
                <div className={`alert alert-success fw-bold text-center position-absolute top-50 start-50 ${props.DisplayNone}`} role="alert">
                    Add successfully
                </div>
            </div>
        </>
    )
}

export default SuccessMassage