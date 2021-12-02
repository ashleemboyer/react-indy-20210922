import classNames from 'classnames/bind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Icon.module.scss';

interface Props {
  name: IconProp;
  small?: boolean;
  large?: boolean;
  spin?: boolean;
}

const Icon: React.FC<Props> = ({ name, small, large, spin }) => {
  let cx = classNames.bind(styles);
  let classes = cx('Icon', {
    'Icon--small': small,
    'Icon--large': large,
  });

  return (
    <FontAwesomeIcon className={classes} icon={name || 'smile'} spin={spin} />
  );
};

export default Icon;
