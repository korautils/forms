import { styled } from '@mui/material'

export const CheckPropsWrapper:any  = styled('div')`
  p {
    margin: 0;
  }

  .grid-table {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        width: 100%;
        align-items: stretch;

        .col {
          width: 100%;
          padding: 4px 6px;

          border: 1px solid #ebebeb;

          &.label {
            width: 40%;
            gap: 4px;
            background-color: #f2f2f2;
            font-weight: bold;
            display: flex;
            align-items: center;

            .icon {
              color: #000000;
              font-size: 0.8em;
            }
          }

          &.full-width {
            width: 100%;
          }
        }
      }

      .sub-items {
        opacity: 0.8;
        .item .label {
          padding-left: 10px;
          background-color: #ffffff;
        }
      }
    }
  }
`
