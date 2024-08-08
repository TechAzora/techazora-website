import React from 'react'
import Dashboard from './Dashboard'
import SIdemenu from './SIdemenu'


function Admin() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <SIdemenu />
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}

export default Admin