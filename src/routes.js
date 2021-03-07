import React from 'react';

//general
const Home      = React.lazy(() => import('./views/homepage/Home'));

//mahasiswa
const NewDashboard  = React.lazy(() => import('./views/mahasiswa/newDashboard/NewDashboard'));
const GradRegister  = React.lazy(() => import('./views/mahasiswa/gradRegister/GradRegister'));
const FileUpload    = React.lazy(() => import('./views/mahasiswa/fileUpload/FileUpload'));
const GradEquip     = React.lazy(() => import('./views/mahasiswa/gradEquip/GradEquip'));
const GradReturnEquip   = React.lazy(() => import('./views/mahasiswa/gradEquip/GradReturnEquip'));

//petugas administrasi
const FileVerification  = React.lazy(() => import('./views/petugasAdministrasi/fileVerification/FileVerification'));
const DetailFile        = React.lazy(() => import('./views/petugasAdministrasi/fileVerification/DetailFile'));
const VerifiedFile      = React.lazy(() => import('./views/petugasAdministrasi/fileVerification/VerifiedFile'));
const PendingVerified   = React.lazy(() => import('./views/petugasAdministrasi/fileVerification/PendingVerified'));

const Equip             = React.lazy(() => import('./views/petugasAdministrasi/equip/Equip'));
const EquipReturn       = React.lazy(() => import('./views/petugasAdministrasi/equip/EquipReturn'));

const ArchivedFile      = React.lazy(() => import('./views/petugasAdministrasi/archivedFile/ArchivedFile'));

//admin
const PeriodicSet   = React.lazy(() => import('./views/admin/PeriodicSet/PeriodicSet'));



// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

// const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/base/switches/Switches'));

// const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/charts/Charts'));
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
// const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// const Users = React.lazy(() => import('./views/users/Users'));
// const User = React.lazy(() => import('./views/users/User'));

const routes = [
  //mahasiswa
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/new-dashboard', name: 'Dashboard', component: NewDashboard },
    { path: '/new-register', name: 'Pendaftaran', component: GradRegister },
    { path: '/new-file-upload', name: 'Unggah Berkas', component: FileUpload },
    { path: '/new-grad-equip', name: 'Pengambilan', component: GradEquip },
    { path: '/new-return-equip', name: 'Pengembalian', component: GradReturnEquip },


    //petugas administrasi
    { path: '/file-verification', name: 'Verifikasi Berkas', component: FileVerification },
    { path: '/equip', name: 'Kelengkapan', component: Equip },
    { path: '/equip-return', name: 'Pengembalian', component: EquipReturn },
    { path: '/archived-file', name: 'Arsip', component: ArchivedFile },
    { path: '/detail-file', name: 'Detail File Pendaftar', component: DetailFile },
    { path: '/verified-file', name: 'Verified File', component: VerifiedFile },
    { path: '/verified-pending', name: 'Verified Pending', component: PendingVerified },
    

    //admin
    { path: '/periodic', name: 'Set Periode', component: PeriodicSet }

  // { path: '/new-dashboard', name: 'New Dashboard', component: NewDashboard }
  // { path: '/theme', name: 'Theme', component: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
