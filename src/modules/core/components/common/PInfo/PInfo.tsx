import classNames from 'classnames'
import { PInfoWrapper } from './styles'
import InfoIcon from '@mui/icons-material/Info'
// import { ChildrenElement } from '@/modules/core/interfaces/general'

interface Props {
  className?: string
  children?: any
}

const PInfo: React.FC<Props> = ({ className, children }) => {
  return (
    <PInfoWrapper className={classNames(className)}>
      <InfoIcon className="info-icon" />
      <div className="pinfo-description-content">{children}</div>
    </PInfoWrapper>
  )
}

export default PInfo
