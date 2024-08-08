import React from 'react'
import Lottie from "lottie-react";
import work from "../../../Animation/work.json";

function HomeAboutus() {
    return (
        <>
            <div className="container-fluid my-2">
               
                <div className="row justify-content-center row-reverse">
                    <div className="col-xl-7 Content-center">
                        <div className='px-2 py-3'>
                            <p className='fs-4 fw-bold'>Tasks and <span className='color'>Workflows</span></p>
                            <p>In today's project management landscape, simplicity reigns supreme. Wavemantra tasks offer a straightforward, effective solution that avoids overwhelming complexity. With intuitive features, it keeps both you and your clients focused on what matters most: achieving goals efficiently.</p>
                            <p>Wavemantra tasks simplify project management, fostering seamless collaboration between teams and clients. Its user-friendly interface ensures smooth communication and streamlined workflows, enhancing productivity and client satisfaction.</p>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className='p-3'>
                            <Lottie animationData={work} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAboutus