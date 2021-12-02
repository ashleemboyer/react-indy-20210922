import { Icon, Switch } from '@components';
import { useTheme } from '@contexts';
import styles from './DarkModeSwitch.module.scss';

const DarkModeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => toggleTheme();

  return (
    <div className={styles.DarkModeSwitch}>
      <Icon name="sun" />
      <Switch
        ariaLabel="Dark Mode"
        id="dark-mode-switch"
        initialValue={theme === 'dark'}
        onChange={handleChange}
      />
      <Icon name="moon" />
    </div>
  );
};

export default DarkModeSwitch;
