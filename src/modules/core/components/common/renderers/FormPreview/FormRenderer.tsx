import { Suspense, useState } from 'react'
import classNames from 'classnames'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import EmptyController from '@/modules/core/components/common/ElementBuilderRenderer/EmptyController'
import RuleManager from '@/modules/builder/classes/managers/RuleManager'
import {
  FormPreviewWrapper,
  Grid,
} from '@/modules/core/components/common/renderers/FormPreview/styles'
// import { Grid } from '@/modules/core/components/common/ModulesCreator/styles'
import { Controller } from 'react-hook-form'
import { getProp, isArrayEmpty } from '@/modules/core/utils'

import {
  ElementRule,
  FormHandlerProps,
} from '@/modules/builder/interfaces/elements/types'
import { Box, ButtonGroup, Divider, Skeleton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import ButtonComponent from '@/modules/core/components/shared/Button'

interface Props {
  form: FormBuilder
  formHandler?: FormHandlerProps
}

const FormRenderer: React.FC<Props> = ({ formHandler = {}, form }) => {
  const [showOnlyFallback, setShowFallback] = useState<boolean>(false)
  const {
    watch = () => ({}),
    control = {},
    errors = {},
    reset = () => {},
  } = formHandler

  const state = watch!()

  const gridTemplateColumns = form.getCols()
    ? `repeat(${form.getCols()}, 1fr)`
    : `repeat(auto-fill, minmax(${form.getColWidth()}px, 1fr))`

  const checkRules = (state: any, rules: Array<Array<ElementRule>> = []) => {
    return new RuleManager(state).processRules(rules)
  }

  const handleOnClickSaveForm = () => {
    console.log('FOR SAVE:', watch())
  }

  const handleOnClickClearForm = () => {
    reset()
  }

  const getMobileCols = () => {
    const cols = form.getCols()!
    return Math.floor(cols / 2) // Dividimos por 2 y usamos Math.floor()
  }

  const renderSkeletonLoaders = () => {
    return (
      <FormPreviewWrapper>
        <Grid
          className='grid'
          sx={(theme: any) => ({
            gridTemplateColumns: form.getCols()
              ? `repeat(${form.getCols()}, 1fr)`
              : `repeat(auto-fill, minmax(${form.getColWidth()}px, 1fr))`,
            gap: form.getGridGap(),
            [theme.breakpoints.down('sm')]: {
              gridTemplateColumns: form.getCols()
                ? `repeat(${Math.floor(form.getCols()! / 2)}, 1fr)`
                : `repeat(auto-fill, minmax(${form.getColWidth()}px, 1fr))`,
            },
          })}
        >
          {!isArrayEmpty(form.getItems()) &&
            form.getItems().map((element, index) => {
              return (
                <div
                  className={classNames('col', element.getClassNames())}
                  key={index}
                  style={element.getStyles() as any}
                >
                  <EmptyController
                    name={element.getName()}
                    render={({ field }) => {
                      return (
                        <>
                          {element.getType() === 'BOX' &&
                            element.build({ field, formHandler })}

                          {element.getType() !== 'BOX' && (
                            <Skeleton
                              variant='rounded'
                              width={'100%'}
                              className={classNames(
                                `skeleton ${element.getProp('size')}`
                              )}
                              sx={{ marginTop: '7px' }}
                            />
                          )}
                        </>
                      )
                    }}
                  />
                </div>
              )
            })}
        </Grid>
      </FormPreviewWrapper>
    )
  }

  return (
    <>
      {/* {showOnlyFallback && renderSkeletonLoaders()} */}
      {!showOnlyFallback && (
        <Suspense fallback={renderSkeletonLoaders()}>
          <FormPreviewWrapper className='FormPreviewWrapper'>
            <Grid
              className='grid'
              sx={{ gridTemplateColumns, gap: form.getGridGap() }}
            >
              {!isArrayEmpty(form.getItems()) &&
                form.getItems().map((element, index) => {
                  const rulesResponse = checkRules(state, element.getRules())
                  if (
                    !rulesResponse ||
                    !rulesResponse?.visible ||
                    element.getVisibility() === 'GONE'
                  ) {
                    return null
                  }

                  const ControllerElement = element.hasControl()
                    ? Controller
                    : EmptyController

                  return (
                    <div
                      className={classNames('col', element.getClassNames())}
                      key={index}
                      style={element.getStyles() as any}
                    >
                      <ControllerElement
                        name={element.getName()}
                        control={control as any}
                        defaultValue=''
                        render={({ field }) =>
                          element
                            .addProps({
                              id: `${element.getType()}-${element.getName()}-${index}`,
                              disabled: rulesResponse?.disabled,
                              error: !!errors[element.getName()],
                              helperText: getProp(
                                errors,
                                `${element.getName()}.message`
                              ),
                            })
                            .build({
                              field,
                              formHandler,
                            })
                        }
                      />
                    </div>
                  )
                })}

              {form.showControls && (
                <Box
                  className='col full-width'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Divider sx={{ marginBottom: 2 }} />
                  <ButtonGroup>
                    <ButtonComponent
                      type='submit'
                      onClick={handleOnClickSaveForm}
                    >
                      <SaveIcon
                        className='icon-margin'
                        sx={{ fontSize: '1.2em !important' }}
                      />
                      Guardar
                    </ButtonComponent>

                    <ButtonComponent
                      type='button'
                      color={'white' as any}
                      onClick={handleOnClickClearForm}
                    >
                      <CleaningServicesIcon
                        className='icon-margin'
                        sx={{ fontSize: '1.2em !important' }}
                      />
                      Limpiar
                    </ButtonComponent>
                  </ButtonGroup>
                </Box>
              )}
            </Grid>
          </FormPreviewWrapper>
        </Suspense>
      )}

      {/* <button
        type="button"
        onClick={() => setShowFallback((value) => !value)}
        style={{ position: 'absolute', bottom: 4, right: 4 }}
      >
        Show Fallback
      </button> */}
    </>
  )
}

export default FormRenderer
