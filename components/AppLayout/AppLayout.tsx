import classNames from 'classnames/bind';
import { DarkModeSwitch } from '@components';
import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => {
  // TODO: set className based on dark mode switch
  const cx = classNames.bind(styles);
  const classes = cx('AppLayout');

  return (
    <div className={classes}>
      <header>
        <p>Test Next.js Site</p>
        <DarkModeSwitch />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
