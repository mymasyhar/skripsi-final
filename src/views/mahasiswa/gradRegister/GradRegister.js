import React, { useState } from 'react'
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
    CCard, 
    CCardBody, 
    CCardFooter, 
    CCardHeader, 
    CCol, 
    CSelect,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CFormText

} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

const GradRegister = () => {
    const [success, setSuccess] = useState(false)

    return (
        <>
            <CCol xs="12" md="12">
                <h3>Pendaftaran Wisuda, Tahun : 2021</h3>
                <h4>Periode : #</h4>
            </CCol>
            

            <CCol xs="12" md="12">
                <CCard>
                    <CCardHeader>
                        <CCol md="4">
                            Form Pendaftaran Wisuda
                        </CCol>
                    </CCardHeader>

                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel>Nama Mahasiswa</CLabel>
                                </CCol>
                                <CCol xs="12" md="8">
                                    <p className="form-control-static">Nama Mahasiswa</p>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input">Nama Lengkap (Sesuai SLTA)</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" id="email-input" name="email-input" placeholder="Nama Sesuai SLTA"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input">Tempat dan Tanggal Lahir</CLabel>
                                </CCol>
                                
                                <CCol  md="4">
                                    <CInput type="text" placeholder="Tempat"/>
                                </CCol>
                                <CCol  md="4">
                                    <CInput type="date" placeholder="Tanggal Lahir"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input">Fakultas / Jurusan</CLabel>
                                </CCol>
                                
                                <CCol xs="12" md="4">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Fakultas</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                </CCol>

                                <CCol xs="12" md="4">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Jurusan</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input">Indeks Prestasi Kumulatif (IPK)</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" placeholder="Indeks Prestasi Kumulatif (IPK)"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input"> Judul Tugas Akhir / Skripsi</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" placeholder="Judul Tugas Akhir / Skripsi"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input">Dosen Pembimbing I dan II Tugas Akhir</CLabel>
                                </CCol>

                                <CCol md="4">
                                    <CInput type="text" placeholder="Dosen Pembimbing I"/>
                                </CCol>

                                <CCol md="4">
                                    <CInput type="text" placeholder="Dosen Pembimbing II"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input"> Alamat Email</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" placeholder="Alamat Email"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input"> Alamat Asal</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" placeholder="Alamat Asal"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input"> No.Telpon/HP yang dapat dihubungi</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" placeholder="No. Telpon / HP yang Bisa dihubungi"/>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel htmlFor="text-input">Pekerjaan Saat ini</CLabel>
                                </CCol>
                                
                                <CCol md="8">
                                    <CInput type="text" placeholder="Pekerjaan Saat ini"/>
                                </CCol>
                            </CFormGroup>
                        </CForm>
                    </CCardBody>
                </CCard>

                <CCard>
                    <CCardHeader>
                        <CCol xs="6" md="6">
                            Form Deposit Toga Wisuda
                        </CCol>
                    </CCardHeader>

                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="4">
                                    <CLabel>Nomor Peminjaman Toga</CLabel>
                                </CCol>

                                <CCol xs="12" md="8">
                                    <CInput type="text" placeholder="../../../../" disabled/>
                                    <CFormText>Otomatis Oleh Sistem</CFormText>
                                </CCol>
                            </CFormGroup>
                        </CForm>
                    </CCardBody>

                    <CCardFooter align="center">
                        <CCol md="5" xl className="">
                            <CButton md="5" col color="info" onClick={() => setSuccess(!success)}>Daftar</CButton>
                            {/* <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Success modal</CButton> */}
                        </CCol>
                    </CCardFooter>
                </CCard>
                
                    
            </CCol>

                <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="info"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>Pendaftaran Berhasil</CModalTitle>
                    </CModalHeader>

                    <CModalBody>
                        Silahkan Melakukan Pembayaran Ke :
                    </CModalBody>

                    <CModalFooter>
                        <CButton color="info" onClick={() => setSuccess(!success)}>Oke</CButton>{' '}
                        <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
                    </CModalFooter>
                </CModal>
        </>
    )
}

export default GradRegister