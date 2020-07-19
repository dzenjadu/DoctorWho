import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './MenuList.css';

const MenuList = ({categories}) => {

    const links = Object.entries(categories).map(([link, title]) => {
        return <Link to={`/${link}`} key={link} className="menu__link">{title}</Link>
    })

    return(
        <nav className="menu">
            {links}
        </nav>
    )
}

const mapStateToProps = ({categories}) => {
    return {categories};
}

export default connect(mapStateToProps)(MenuList);