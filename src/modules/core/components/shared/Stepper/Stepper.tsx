import * as React from 'react'
import { useTheme } from '@mui/material/styles/index'
import { Divider } from '@mui/material'
import { uuidv4 } from '@/modules/core/utils'
import {
  FormHandlerProps,
  StepItem,
} from '@/modules/builder/interfaces/elements/types'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

interface Props {
  name?: string
  value?: { activeStep: number }
  onChange?: any
  steps: Array<StepItem>
  formHandler?: FormHandlerProps
}

const Stepper = React.forwardRef<HTMLDivElement, Props>(function Element(
  {
    name = uuidv4(),
    steps,
    value = { activeStep: 0 },
    onChange,
    formHandler = {},
  },
  ref
) {
  const theme = useTheme()
  const maxSteps = steps.length

  const { watch } = formHandler
  const state = watch!(name)
  const { activeStep = 0 } = value

  const handleOnChange = (newStep: any) => {
    onChange({
      target: {
        name,
        value: {
          ...state,
          activeStep: newStep,
        },
      },
    })
  }

  const handleNext = () => {
    handleOnChange(activeStep + 1)
    // setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    handleOnChange(activeStep - 1)
    // setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#f4f4f4',
        }}
      >
        <Typography>
          {steps[activeStep] ? steps[activeStep].label as any : 'Label Indefinido'}
        </Typography>
      </Paper>

      <Divider />

      <Box sx={{ width: '100%', p: 2 }} className="step-items">
        {steps.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              display: activeStep == index ? 'block' : 'none',
            }}
          >
            {typeof item.body === 'string' && item.body}

            {React.isValidElement(item.body) &&
              React.cloneElement(item.body as any, {
                formHandler,
                parentName: name,
              })}
          </Box>
        ))}
      </Box>

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atrás
          </Button>
        }
      />
    </Box>
  )
})

export default Stepper
