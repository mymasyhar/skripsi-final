import React, {  } from 'react'
import {
    CBadge,
    CButton,
    CDataTable,
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol, 
    CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import gradPeriodic from '../../dummyData/GradPeriodic'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['tahun','periode', 'tanggal_pelaksanaan', 'mulai_pendaftaran', 'batas_pendaftaran', 'status']


const PeriodicSet = () => {
    return (
        <>
            <CRow>
                <CCol md="12">
                    <h2>Here We Go, New Set Periodic Page !</h2>
                </CCol>
            </CRow>

            <CCard>
                <CCardHeader>
                Periode Pelaksanaan Wisuda
                </CCardHeader>

                <CCardBody>
                    <CRow>
                        <CCol md="12">
                        <CButton className="btn-twitter mr-0 mb-4"><CIcon name="cilPlus"/><span className="mfs-2">Tambah</span></CButton>
                        </CCol>
                    </CRow>
                    
                    <CDataTable
                    items={gradPeriodic}
                    fields={fields}
                    hover
                    striped
                    bordered
                    size="sm"
                    itemsPerPage={6}
                    pagination
                    scopedSlots = {{
                        'status':
                        (item)=>(
                            <td>
                            <CBadge color={getBadge(item.status)}>
                                {item.status}
                            </CBadge>
                            </td>
                        )
                    }}
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default PeriodicSet