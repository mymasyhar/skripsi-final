import React, { } from 'react'
import {
    CCard,
    CCardHeader,
    CCardBody,
    CDataTable,
    CBadge,
    CCol, 
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CButton
} from '@coreui/react'

import studentEquip from '../../dummyData/StudentEquip';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const fields = ['id','nama','fakultas', 'jurusan', 'tgl_pengambilan','aksi', 'status']

// import CIcon from '@coreui/icons-react'

const EquipReturn = () => {
    return (
        <>
            <CRow>
                <CCol xs="12" md="12">
                    <h3>Pengembalian Kelengkapan Wisuda</h3>
                    <h4>Tahun : 2021</h4>
                    <h4>Periode : #</h4>
                </CCol>

                <CCol xs="12">
                    <CCard className="mt-2 mb-0">
                        <CCardBody>
                            <CNav fill variant="pills">
                                <CNavItem>
                                    <CNavLink to="/equip">Pengambilan</CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink to="/equip-return" active>Pengembalian</CNavLink>
                                </CNavItem>
                            </CNav>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs="12" lg="12">
                    <CCard>
                        <CCardHeader>
                        Pengambilan Kelengkapan Wisuda dan Undangan Mahasiswa
                        </CCardHeader>

                        <CCardBody className="text-center">
                            <CDataTable
                            items={studentEquip}
                            fields={fields}
                            striped
                            itemsPerPage={5}
                            pagination
                            scopedSlots = {
                                {
                                    'status':
                                    (item)=>(
                                        <td>
                                        <CBadge color={getBadge(item.status)}>
                                            {item.status}
                                        </CBadge>
                                        </td>
                                    )
                                }
                            }
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default EquipReturn