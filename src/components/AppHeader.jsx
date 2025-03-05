import { NavLink } from 'react-router-dom';
import style from './AppHeader.module.css';

// creo un array per dare ai bottoni della navbar un nome e un link
const navMenu = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/Creation',
        title: 'Create Player'
    },
    {
        path: '/Info',
        title: 'Info'
    }
];






function AppHeader() {
    return (
        <header className={`${style.bodyHeader}`}>
            {/* Logo Zone */}
            <div className={`${style.logo}`}>
                <img  src="../../public/img/logo.webp" alt="" />
            </div>
            {/* Menu zone */}
            <div>
                {navMenu.map((CurButton) => (
                    <NavLink to={CurButton.path} key={CurButton.title}> {CurButton.title}</NavLink>
                ))}</div>
        </header>
    );
}

export default AppHeader;