import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import React from 'react';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): React.JSX.Element => (
  <div className={styles.container}>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Кинопоиск Exam</Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/favorites">Избранное</Link>
        </li>
      </ul>
    </nav>

    <main className={styles.main}>{children ?? <Outlet />}</main>

    <footer className={styles.footer}>
      <p>© Экзамен для Дельфинов ^^</p>
    </footer>
  </div>
);

export default Layout;
