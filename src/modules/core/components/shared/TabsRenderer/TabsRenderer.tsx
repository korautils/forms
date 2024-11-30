import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import { TabCustom, TabsRendererWrapper } from '@/modules/core/components/shared/TabsRenderer/styles'
import { Box } from '@mui/material'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { isArrayEmpty, uuidv4 } from '@/modules/core/utils'
import { ItemOptionProps } from '@/modules/builder/interfaces/elements/components'
import { ChildrenElement } from '@/modules/builder/interfaces/general'

interface TabsValue {
  tabValue?: string
}

interface Props {
  options?: Array<ItemOptionProps>
  name?: string
  value?: TabsValue
  onChange?: any
  formHandler?: FormHandlerProps
}

interface TabPanelProps {
  children?: ChildrenElement
  currentValue?: string
  value: string
}

const CustomTabPanel = ({
  children,
  value,
  currentValue,
  ...props
}: TabPanelProps) => {
  const isActive = value === currentValue

  return (
    <div
      role="tabpanel"
      style={{ display: isActive ? 'block' : 'none' }}
      id={`simple-tabpanel-${currentValue}`}
      aria-labelledby={`simple-tab-${currentValue}`}
      {...props}
    >
      <Box sx={{ padding: '10px 0' }}>{children as any}</Box>
    </div>
  )
}

const allProps = (value: string) => {
  return {
    id: `simple-tab-${value}`,
    'aria-controls': `simple-tabpanel-${value}`,
    value: value,
  }
}

const TabsRenderer: React.FC<Props> = React.forwardRef(function Element(
  { name = uuidv4(), options = [], value = {}, onChange, formHandler = {} },
  ref: any
) {
  const { tabValue = options?.[0]?.value } = value
  const { watch } = formHandler
  const formState = watch!()
  const state = watch!(name)

  const handleChange = React.useCallback(
    (event: any, newValue: string) => {
      onChange({
        target: {
          name: name,
          value: {
            ...state,
            tabValue: newValue,
          },
        },
      })
    },
    [name, onChange, state]
  )

  const visibleOptions = options.filter((item) => item.visible != false)

  return (
    <TabsRendererWrapper className="TabsRendererWrapper" ref={ref}>
      <>
        <Tabs value={tabValue} onChange={handleChange}>
          {!isArrayEmpty(options) &&
            visibleOptions.map((item, index) => (
              <TabCustom
                label={item.label as any}
                {...allProps(item.value as string)}
                wrapped
                key={index}
              />
            ))}
        </Tabs>

        {!isArrayEmpty(visibleOptions) &&
          visibleOptions.map((item, index) => (
            <CustomTabPanel
              value={item.value as string}
              currentValue={tabValue}
              key={index}
            >
              {typeof item.children === 'string' && item.children}

              {React.isValidElement(item.children) &&
                React.cloneElement(item.children as any, {
                  formHandler,
                  parentName: name,
                })}
            </CustomTabPanel>
          ))}
      </>
    </TabsRendererWrapper>
  )
})

export default React.memo(TabsRenderer)
