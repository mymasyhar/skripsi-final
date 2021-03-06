import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
//mahasiswa
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Mahasiswa']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/new-dashboard',
    icon: <CIcon name="cilSpeedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Pendaftaran',
    to: '/new-register',
    icon: <CIcon name="cilPen" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Unggah Berkas',
    to: '/new-file-upload',
    icon: <CIcon name="cilCloudUpload" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kelengkapan dan Jadwal',
    to: '/new-grad-equip',
    icon: <CIcon name="cilBook" customClasses="c-sidebar-nav-icon" />,
  },


  //petugas administrasi
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Petugas Administrasi']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Verifikasi Berkas',
    to: '/file-verification',
    icon: <CIcon name="cilListRich" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kelengkapan',
    to: '/equip',
    icon: <CIcon name="cilFolderOpen" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Arsip',
    to: '/archived-file',
    icon: <CIcon name="cilBriefcase" customClasses="c-sidebar-nav-icon" />,
  },

//admin
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Admin']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Periode Wisuda',
    to: '/periodic',
    icon: <CIcon name="cilCalendar" customClasses="c-sidebar-nav-icon" />,
  }
  
]

export default _nav
