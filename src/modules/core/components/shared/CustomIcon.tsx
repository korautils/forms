import SvgIcon from '@mui/material/SvgIcon';
import classNames from 'classnames';

interface Props {
  src?: any;
  className?: string
}

const CustomIcon: React.FC<Props> = ({ src, className }) => {
  return <SvgIcon component={src} viewBox='0 0 24 24' className={classNames(className)} />;
};

export default CustomIcon;
