import { ChangeEventHandler, FC } from 'react';
import styles from './Switch.module.scss';

interface Props {
  ariaLabel: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FC<Props> = ({ ariaLabel, id, onChange }) => (
  <label className={styles.Switch}>
    <div>
      <input
        aria-label={ariaLabel}
        id={id}
        onChange={onChange}
        role="switch"
        type="checkbox"
      />
      <span />
    </div>
  </label>
);

export default Switch;
