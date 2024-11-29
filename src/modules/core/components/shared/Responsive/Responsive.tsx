import Hidden from '@mui/material/Hidden';
import { get as getProp } from 'object-path';
import { ContentProps, FnIsMobileProps, validateProps } from './types';

export const validate = ({ minWidth, maxWidth, isMobile }: validateProps) => {
  if (isMobile !== null) {
    return isMobile;
  } else if (typeof window !== 'object') {
    return false;
  } else {
    const w = window.innerWidth;
    const v = w >= minWidth && w <= maxWidth;
    return v;
  }
};

export const MobileContent = ({ ssr = false, children }: ContentProps) => {
  return (
    <Hidden implementation={ssr ? 'css' : 'js'} only={['xl', 'lg', 'md']}>
      {children}
    </Hidden>
  );
};

export const WebContent = ({ ssr = false, children }: ContentProps) => {
  return (
    <Hidden implementation={ssr ? 'css' : 'js'} only={['xs', 'sm']}>
      {children}
    </Hidden>
  );
};

export const isMobile = ({
  httpRequest = null,
  minWidth = 0,
  maxWidth = 850,
}: FnIsMobileProps) => {
  if (httpRequest) {
    const UA = getProp(httpRequest, 'headers.user-agent');
    const isMobile = Boolean(
      UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    return isMobile;
  } else {
    return validate({ minWidth, maxWidth });
  }
};
