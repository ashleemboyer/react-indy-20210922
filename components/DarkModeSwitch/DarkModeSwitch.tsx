import { Icon, Switch } from '@components';
import styles from './DarkModeSwitch.module.scss';

const DarkModeSwitch = () => {
  const handleChange = () => console.log('changed toggle');

  return (
    <div className={styles.DarkModeSwitch}>
      <Icon name="sun" />
      <Switch
        ariaLabel="Dark Mode"
        id="dark-mode-switch"
        onChange={handleChange}
      />
      <Icon name="moon" />
    </div>
  );
};

export default DarkModeSwitch;
