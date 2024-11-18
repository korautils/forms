import * as React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import EditIcon from '@mui/icons-material/Edit'

interface ActionItem {
  name: string
  icon: React.ReactElement
}

interface Props {
  actions: Array<ActionItem>
}

const SpeedAccess: React.FC<Props> = ({ actions }) => {
  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        right: 20,
        bottom: 20,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default SpeedAccess
