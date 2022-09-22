import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfos, unsetUserInfos } from '../../features/auth/authSlice';
import { deleteAll } from '../../features/basket/basketSlice';

import BasketNotif from '../basketNotif/BasketNotif';

import styles from "./Header.module.css";
import logo from '../../logo.png';

const Header = () => {
    const userInfos = useSelector(selectUserInfos);
    const dispatch = useDispatch();
  
    const logout = () => {
      dispatch(unsetUserInfos());
      dispatch(deleteAll());
    }

    return (
        <header className={styles.appHeader}>
            <img className={styles.siteLogo} src={logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mon-panier">
                            <BasketNotif />
                        </NavLink>
                    </li>
                    {(userInfos && userInfos.token) && (
                        <li>
                            <button onClick={logout} className={styles.logoutBtn}>
                                Déconnexion
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;