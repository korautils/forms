import { styled } from '@mui/material'
import { green } from '@mui/material/colors'

export const PropsSelectionWrapper:any  = styled('div')`
  .tree-props-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 4px;

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;

      .header-label {
        background-color: #222222;
        color: #ffffff;
        font-weight: bold;
        padding: 10px;

        .item-value {
          color: ${green[500]};
        }
      }

      .MuiSimpleTreeView-root {
        padding-top: 8px;
      }
    }

    .json-tree-view {
      max-height: 300px;
      overflow: auto;
    }

    .tree-item:not(.hasChildren) .MuiTreeItem-iconContainer {
      display: none;
    }
  }
`
