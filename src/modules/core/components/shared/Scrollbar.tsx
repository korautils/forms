import { NoSsr, styled } from '@mui/material'
import classNames from 'classnames'
import Scrollbars from 'react-custom-scrollbars'

const ScrollbarControl:any  = styled(Scrollbars as any)``

interface Props {
  autoShow?: boolean
  autoHide?: boolean
  children?: any
  className?: string
}

const Scrollbar: React.FC<Props> = ({
  autoShow = true,
  autoHide,
  className,
  children,
}) => {
  return (
    <NoSsr>
      <ScrollbarControl
        className={classNames(className, { 'custom-scrollbar': autoShow })}
        autoHide={autoHide}
      >
        {children}
      </ScrollbarControl>
    </NoSsr>
  )
}

export default Scrollbar
