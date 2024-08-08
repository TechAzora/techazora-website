import React from 'react';

function Submission(props) {
     return (

        <div
            className={`alert alert-success d-flex align-items-center ${props.submissionpopup}`}
            role="alert"
        >
            <svg
                className="bi flex-shrink-0 me-2"
                width={24}
                height={24}
                role="img"
                aria-label="Success:"
            >
                <use xlinkHref="#check-circle-fill" />
            </svg>
            <div>
                <b>Submit Successfully</b>
            </div>
        </div>
    )
}

export default Submission