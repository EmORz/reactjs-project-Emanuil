import React, {Component} from 'react'
import styles from './index.module.css'
import Link from '../link'

class Header extends Component {

    render(){
        const { loggedIn, onLogout } = this.props;
        return (
            <header className={styles.navigation}>
                <ul>
                {/* <a href="javascript:void(0)" onClick={onLogout}>Logout</a> */}
                    <Link href='/' title="Home" type='header' ></Link>
                    <Link href='/login' title="Login" type='header' ></Link>
                    <Link href='/register' title="Register" type='header' ></Link>
                    <Link href='#' title="Logout" type='header' ></Link>
                </ul>
            </header>
        )
    }

}

export default Header
