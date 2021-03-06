import React from 'react'
import {
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

const fields = ['id','nama', 'fakultas', 'jurusan', 'tanggal_pengajuan', 'status']

const VerifiedFile = () => {

    return (
        <>
            <CCol xs="12" md="12">
                <h3>Verifikasi Berkas Pendaftaran Wisuda, Tahun : 2021</h3>
                <h4>Periode : #</h4>
            </CCol>

            <CCard>
                <CCardHeader>
                Daftar Pengajuan Mahasiswa : Terverifikasi
                </CCardHeader>

                <CCol xs="12">
                    <CCard className="mt-2 mb-3">
                        <CCardBody>
                            <CNav fill variant="pills">
                                <CNavItem>
                                    <CNavLink to="/file-verification">On-List</CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink active>Verified</CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink to="/verified-pending">Pending</CNavLink>
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
                        { 'status':
                            (item)=>(
                                <td>
                                    {item.status}
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

export default VerifiedFile