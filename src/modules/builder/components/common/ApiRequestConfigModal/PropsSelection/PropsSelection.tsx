import { PropsSelectionWrapper } from './styles'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { getProp, uuidv4 } from '@/modules/core/utils'
import JsonTreeView from './JsonTreeView'
import PInfo from '../../PInfo'
import CheckboxLabel from '@/modules/core/components/shared/Forms/CheckboxLabel'

interface Props {
  name: string
  formHandler?: FormHandlerProps
}

const PropsSelection: React.FC<Props> = ({
  name = uuidv4(),
  formHandler = {},
}) => {
  const { watch, setValue } = formHandler

  const state = watch!(name) || {}
  const response = watch!('response')

  const getObjectModel = (response: any) => {
    const data = getProp(response, 'data', {})
    if (!data) {
      return {}
    }

    return data
  }

  const handleOnChange = (event: any) => {
    const { type, name: _name, value: _value, checked } = event.target
    setValue &&
      setValue(name, {
        ...state,
        [_name]: type === 'checkbox' ? checked : _value,
      })
  }

  return (
    <PropsSelectionWrapper>
      <PInfo>
        <p className="description">
          Selecciona los dos props para{' '}
          <b>
            value <i className="subtext">(identificador)</i>
          </b>{' '}
          y{' '}
          <b>
            label <i className="subtext">(descripción)</i>
          </b>{' '}
          que deseas utilizar en tu selector:
        </p>
      </PInfo>

      <CheckboxLabel
        name="hasChildren"
        label="Habilitar sub-nodos"
        onChange={handleOnChange}
      />

      <div className="tree-props-container">
        <div className="container value-container">
          <div className="header-label">
            <label>
              Value:
              <span className="item-value">{` [${getProp(
                state,
                'value',
                ''
              )}]`}</span>
            </label>
          </div>

          <div className="json-tree-view">
            <JsonTreeView
              name="value"
              json={getObjectModel(response)}
              onSelect={handleOnChange}
              value={getProp(state, 'value')}
            />
          </div>
        </div>

        <div className="container label-container">
          <div className="header-label">
            <label>
              Label:
              <span className="item-value">{` [${getProp(
                state,
                'label',
                ''
              )}]`}</span>
            </label>
          </div>
          <div className="json-tree-view">
            <JsonTreeView
              name="label"
              json={getObjectModel(response)}
              onSelect={handleOnChange}
              value={getProp(state, 'label')}
            />
          </div>
        </div>

        {getProp(state, 'hasChildren') === true && (
          <div className="container label-container">
            <div className="header-label">
              <label>
                Children:
                <span className="item-value">{` [${getProp(
                  state,
                  'children',
                  ''
                )}]`}</span>
              </label>
            </div>
            <div className="json-tree-view">
              <JsonTreeView
                name="children"
                json={getObjectModel(response)}
                onSelect={handleOnChange}
                value={getProp(state, 'children')}
              />
            </div>
          </div>
        )}
      </div>
    </PropsSelectionWrapper>
  )
}

export default PropsSelection
