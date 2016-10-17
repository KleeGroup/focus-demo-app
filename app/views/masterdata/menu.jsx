// import React from 'react';
// import i18next from 'i18next';
// import {Link} from 'react-router';
//
// const links = [
//     { reference:'countries', href: '/admin/masterdata/countries', title: 'view.admin.masterdata.countries'},
//     { reference:'movietype', href: '/admin/masterdata/movietype', title: 'view.admin.masterdata.movietype'},
//     { reference:'gender', href: '/admin/masterdata/gender', title: 'view.admin.masterdata.gender'}
// ];
//
// function masterdataMenu({reference}) {
//     return (
//         <ul className="mdl-list">
//
//         {
//             links.map(link => {
//                 const otherProps = { className: 'mdl-list__item' };
//                 if(link.reference === reference) {
//                     otherProps['data-active'] = true;
//                 }
//                 return (
//                     <li key={link.reference} {...otherProps}>
//                         <Link to={link.href}>{i18next.t(link.title)}</Link>
//                     </li>
//                 );
//             })
//         }
//         </ul>
//     );
// }
//
// masterdataMenu.displayName = 'MasterdataMenu';
// export default masterdataMenu;
