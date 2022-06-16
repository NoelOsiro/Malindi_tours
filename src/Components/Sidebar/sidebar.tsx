import React from 'react';
import './sidebar.css';

interface Iprops {
    isActive: Boolean;
}

const navList = [

    { href: '#Home', icon: 'fa fa-th-large', linkText: 'Home' },
    { href: '#About', icon: 'fa fa-address-card', linkText: 'About' },
    { href: '#Services', icon: 'fa fa-cubes', linkText: 'Services' },
    { href: '#Gallery', icon: 'fa fa-picture-o', linkText: 'Gallery' },

]

const Sidebar = (props:Iprops) => {
    return (
        <div>
            <div className={`vertical-nav bg-white ${props.isActive && 'active'}`} id="sidebar">
                <div className="py-4 px-3 mb-4 bg-light">
                    <div className="media d-flex align-items-center">
                        <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                    </div>
                    <div className="media-body mt-1">
                        <h4 className="m-0">Noel Otieno Osiro</h4>
                        <p className="font-weight-light text-muted mb-0">Cloud Solutions Architect</p>
                        <p className="font-weight-light text-muted mb-0">Web developer</p>
                    </div>
                </div>
                <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>
                <ul className="nav flex-column bg-white mb-0">
                    {navList.map((listItem) => (
                        <li key={listItem.href} className="nav-item">
                            <a href={listItem.href} className="nav-link text-dark font-italic bg-light">
                                <i className={`${listItem.icon} mr-3 text-primary fa-fw`}></i>
                                {listItem.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar