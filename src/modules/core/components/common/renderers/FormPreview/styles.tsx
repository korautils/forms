import { styled } from '@mui/material'

export const FormPreviewWrapper:any  = styled('div')`
  display: block;
  width: 100%;
`

export const Grid:any  = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  width: 100%;
  gap: 20px;
  justify-items: start;

  .drag-over {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 1px dashed #cccccc;
    }

    .item-component-container {
      &::before {
        display: none !important;
      }
    }
  }

  .handle {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    z-index: 9;
  }

  .col {
    width: 100%;
    display: flex;
    /* align-items: flex-end; */
    height: 100%;

    &.full-width {
      grid-column: 1 / -1;
    }

    .item-component-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;

      &.selected,
      &:hover:not(.read-only) {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid ${({ theme }) => theme.palette.primary.main};
        }

        &:hover:not(.selected, .read-only) {
          cursor: pointer;
          & * {
            pointer-events: none;
          }
        }

        &:hover:not(.selected, .read-only) {
          &::before {
            border-color: #ecebeb;
          }
        }

        &:not(:hover:not(.selected, .read-only)) {
          .dot {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
            background-color: #ffffff;
            top: -14px;
            left: -14px;

            &.right-top {
              left: unset;
              right: -14px;
            }

            &.left-bottom {
              top: unset;
              bottom: -14px;
            }

            &.right-bottom {
              top: unset;
              left: unset;
              right: -14px;
              bottom: -14px;
            }
          }
        }
      }
    }
  }
`
