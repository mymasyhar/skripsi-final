import React, {} from 'react'
import {
    CCard,
    CCardHeader,
    CCardBody,
    CCol,
    CRow
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'

const NewDashboard = () => {
    return (
        <>
            <CRow>
                <CCol md="12">
                    <CCard color="info" className="text-white">
                        <div className="text-left mt-4 mb-0 ml-4">
                            <img src={'avatars/8.jpg'} alt="admin@bootstrapmaster.com" />
                        </div>
                        <CCardBody>
                        
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            
        </>
    )
}

export default NewDashboard