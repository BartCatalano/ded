import { NavLink } from 'react-router-dom';

// creo un array per dare ai bottoni della navbar un nome e un link
const navMenu = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/Creation',
        title: 'NewPlayer'
    }
];






function AppHeader() {
    return (
        <header>
            {/* Logo Zone */}
            <div>
                LOGO
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