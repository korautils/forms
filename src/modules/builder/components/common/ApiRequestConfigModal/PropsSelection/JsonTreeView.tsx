import React, { useState } from 'react'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import Radio from '@mui/material/Radio'
import { Box, FormControlLabel } from '@mui/material'
import { uuidv4 } from '@/modules/core/utils'
import { sortKeysByType, limitArrayChilds } from '../../../../utils/index'
import classNames from 'classnames'

export interface SelectEvent {
  target: {
    name: string
    value: string
  }
}

// Interfaces para una mejor tipificación
interface JsonTreeViewProps {
  name: string
  json: Record<string, any>
  onSelect: (event: SelectEvent) => void
  value?: string
}

interface RenderTreeProps {
  name: string
  nodes: Record<string, any>
  selectedNodeId?: string
  onNodeSelect: any
  path: string
}

// Componente renderizador de nodos
const RenderTree: React.FC<RenderTreeProps> = ({
  name,
  nodes,
  selectedNodeId,
  onNodeSelect,
  path,
}) => {
  return (
    <>
      {sortKeysByType(limitArrayChilds(nodes)).map((key: any) => {
        const node = nodes[key]
        const hasChildren =
          typeof node === 'object' ||
          (Array.isArray(node) && node !== undefined)

        // Construye la ruta completa del nodo
        const currentPath = path ? `${path}.${key}` : key

        return (
          <TreeItem
            key={key}
            itemId={uuidv4()}
            className={classNames('tree-item', { hasChildren })}
            label={
              <Box display="flex" alignItems="center">
                {!hasChildren && (
                  <FormControlLabel
                    label={key}
                    control={
                      <Radio
                        checked={selectedNodeId === currentPath}
                        onChange={() => onNodeSelect(currentPath)}
                        value={currentPath}
                        name="json-tree-radio-group"
                        inputProps={{ 'aria-label': key }}
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 20,
                          },
                        }}
                      />
                    }
                    sx={{ width: '100%' }}
                  />
                )}

                {hasChildren && key}
              </Box>
            }
          >
            {hasChildren ? (
              <RenderTree
                name={name}
                nodes={node}
                selectedNodeId={selectedNodeId}
                onNodeSelect={onNodeSelect}
                path={currentPath}
              />
            ) : null}
          </TreeItem>
        )
      })}
    </>
  )
}

// Componente principal
const JsonTreeView: React.FC<JsonTreeViewProps> = ({
  json,
  name,
  onSelect,
  value,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(
    value
  )

  const handleNodeSelect = (nodePath: string) => {
    setSelectedNodeId(nodePath)
    onSelect({ target: { name, value: nodePath } })
  }

  return (
    <SimpleTreeView>
      <RenderTree
        name={name}
        nodes={json}
        selectedNodeId={selectedNodeId}
        onNodeSelect={handleNodeSelect}
        path=""
      />
    </SimpleTreeView>
  )
}

export default JsonTreeView
