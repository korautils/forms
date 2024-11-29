import { styled } from '@mui/material'

export const BasicTable:any  = styled('table')`
  border-collapse: collapse;
  width: 100%;

  thead {
    tr {
      background-color: #0f171f;
      position: sticky;
      top: 0px;

      th {
        border-left: 1px solid #0f171f;
        border-right: 1px solid #0f171f;
        border-bottom: 1px solid #ffffff;
      }
    }

    &::before {
      content: '';
      background-color: #0f171f;
      top: -1px;
      left: 0;
      right: 0;
      bottom: 0;
    }

    tr {
      border-bottom: 1px solid #ebebeb;

      th {
        color: #ffffff;
        text-align: left;
        padding: 0 10px;
        font-size: 0.8em;
        vertical-align: middle;

        &.action,
        &.actions {
          text-align: center;
          .icon {
            font-size: 0.8em;
          }
        }
      }
    }
  }

  tbody {
    border: 1px solid #ebebeb;

    tr {
      &:not(:last-child) {
        border-bottom: 1px solid #ebebeb;
      }

      td {
        padding: 6px 8px;

        &.index-column {
          background-color: #f4f4f4;
          font-size: 0.9em;
        }

        &:not(:last-child) {
          border-right: 1px solid #ebebeb;
        }

        &.add-option {
          padding: 8px;
        }

        input {
          width: 100%;
          border: 1px solid #ebebeb;
          background-color: #ffffff !important;
          color: #000000 !important;
          box-shadow: unset;
          font-size: 14px;
          padding: 6px;
          border-radius: 4px;
        }

        &.action,
        &.actions {
          vertical-align: middle;

          .btn-action {
            background-color: #d32f2f;
            color: #ffffff;
            border: 0;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
              background-color: #ff0048;
            }

            .icon {
              font-size: 1.6em;
            }
          }
        }
      }
    }
  }
`

export const BasicTableWrapper:any  = styled('div')`
  display: block;
  width: 100%;
  overflow: auto;
  max-height: 300px;
`
