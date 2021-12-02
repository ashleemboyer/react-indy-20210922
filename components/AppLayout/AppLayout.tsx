import { FC } from 'react';
import classNames from 'classnames/bind';
import { DarkModeSwitch } from '@components';
import { useTheme } from '@contexts';
import styles from './AppLayout.module.scss';

const AppLayout: FC = ({ children }) => {
  const { theme } = useTheme();
  const cx = classNames.bind(styles);
  const classes = cx('AppLayout', {
    [`AppLayout--${theme}`]: !!theme,
  });

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
