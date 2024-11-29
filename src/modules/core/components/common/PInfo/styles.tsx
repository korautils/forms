import { styled } from '@mui/material'

export const PInfoWrapper:any  = styled('div')`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;

  .info-icon {
    color: #3a4cea;
    margin-top: 4px;
    font-size: 1.5em;
    margin-right: 12px;
  }

  .pinfo-description-content p {
    font-size: 1em;
    color: #333;
    line-height: 1.5;
  }

  i,
  .subtext {
    opacity: 0.6;
    font-style: italic;
    color: #666;
  }
`
