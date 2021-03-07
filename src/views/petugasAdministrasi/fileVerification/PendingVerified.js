import React from 'react'
import {
    CButton,
    CDataTable,
    CCard, 
    CCardBody,  
    CCardHeader, 
    CCol,
    CNav,
    CNavItem,
    CNavLink 
} from '@coreui/react'

import gradStudentRegister from '../../dummyData/GradStudentRegister'

const fields = ['id','nama', 'fakultas', 'jurusan', 'tanggal_pengajuan', 'status', 'aksi']

const PendingVerified = () => {

    return (
        <>
            <CCol xs="12" md="12">
                <h3>Verifikasi Berkas Pendaftaran Wisuda</h3> 
                <h4>Tahun : </h4>
                <h4>Periode : #</h4>
            </CCol>

            <CCard>
                <CCardHeader>
                Daftar Pengajuan Mahasiswa : On List
                </CCardHeader>

                <CCol xs="12">
                    <CCard className="mt-2 mb-0">
                        <CCardBody>
                            <CNav fill variant="pills">
                                <CNavItem>
                                    <CNavLink to="/file-verification">On-List</CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink to="/verified-file">Verified</CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink active>Pending</CNavLink>
                                </CNavItem>
                            </CNav>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCardBody>
                    
                    <CDataTable
                    items={gradStudentRegister}
                    fields={fields}
                    striped
                    bordered
                    size="sm"
                    itemsPerPage={6}
                    pagination
                    scopedSlots = {
                        { 'aksi':
                            (item)=>(
                                <td>
                                    <CButton color="success" className="mt-1 mb-1" to="/detail-file"><span className="mfs-2">Detail</span></CButton>
                                </td>
                            )
                        }
                    }
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default PendingVerified