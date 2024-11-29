import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Accordion, AccordionDetails, AccordionSummary } from './styles'
import classNames from 'classnames'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { isArrayEmpty, uuidv4 } from '@/modules/core/utils'
import { ChildrenElement } from '@/modules/builder/interfaces/general'

interface AccordionItem {
  value: string
  label?: ChildrenElement
  content?: ChildrenElement
}

interface Props {
  name?: string
  className?: string
  options?: Array<AccordionItem>
  formHandler?: FormHandlerProps
}

const AccordionComponent: React.FC<Props> = React.forwardRef(function Element(
  { name = uuidv4(), options = [], className, formHandler = {} },
  ref: any
) {
  const { watch } = formHandler
  const state = watch!(name)

  const [expanded, setExpanded] = React.useState<string | false>(
    isArrayEmpty(options) ? false : options[0].value
  )

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div className={classNames(className)} ref={ref}>
      {options?.map((item, _) => (
        <Accordion
          expanded={expanded === item.value}
          onChange={handleChange(item.value)}
          key={item.value}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={`${item.value}-header`}
          >
            <Typography>{item.label as any}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content as any}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
})

export default AccordionComponent
