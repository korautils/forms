import { styled } from '@mui/material'

export const ResponseViewerWrapper:any  = styled('div')`
  display: flex;
  flex-direction: column;

  .response-tabs-container {
    margin-top: 0.6rem;
    margin-bottom: 0;
  }
`

export const EmptyResponseWrapper:any  = styled('div')`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 3rem;
    color: #999ba4;
  }
  .title,
  .description {
    color: #999ba4;
  }
`

export const HttpHeadersWrapper:any  = styled('div')`
  .status-container {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

export const ElementViewerWrapper:any  = styled('div')`
  .fieldset-viewer {
    .fieldset-viewer-legend {
      color: #333333;
      font-size: 1em;
      opacity: 0.6;
      font-style: italic;
      span {
        display: block;
        padding-left: 6px;
        padding-right: 6px;
      }
    }

    border: 1px dashed rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
    padding-bottom: 2rem;
    margin: 0;
    border-radius: 4px;

    .fieldset-container {
      display: block;
      margin: 0 auto;
      max-width: 300px;
    }
  }
`

export const ComponentLayoutWrapper:any  = styled('div')`
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 8px;

  &:hover {
    background-color: rgb(0 122 255 / 20%) !important;
  }

  .label {
    width: 40%;
    font-size: 0.9em;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 4px;

    .icon {
      font-size: 1.2em;
      cursor: pointer;
    }
  }

  .component {
    border: 1px solid #ebebeb;
    width: 60%;
    box-shadow: unset;
    font-size: 14px;
    padding: 6px;
    border-radius: 4px;
    &:focus {
      outline: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
`
