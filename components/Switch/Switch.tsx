import { ChangeEventHandler, FC } from 'react';
import styles from './Switch.module.scss';

interface Props {
  ariaLabel: string;
  id: string;
  initialValue: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FC<Props> = ({ ariaLabel, initialValue, id, onChange }) => (
  <label className={styles.Switch}>
    <div>
      <input
        aria-label={ariaLabel}
        defaultChecked={initialValue}
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
