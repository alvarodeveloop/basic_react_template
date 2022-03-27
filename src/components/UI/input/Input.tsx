import React, { PropsWithChildren, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Form, InputGroup } from 'react-bootstrap'

interface InputProps {
  label?: string
  isNotNeedlabelBlock?: boolean
  type: string
  name: string
  id?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value?: any
  cols?: string
  placeholder?: string
  required?: boolean
  errors?: string[]
  messageErrors?: string[]
  readOnly?: boolean
  multiple?: boolean
  className?: string
  steps?: string
  autoComplete?: string
  notMarginBottom?: boolean
  classFormGroup?: string
  children?: ReactNode | null
}

const Input: (props: InputProps) => JSX.Element = (props: InputProps) => {
  const arrayTypes = ['select', 'textarea', 'checkbox', 'radio']
  const classFormGroup = props.classFormGroup
    ? props.classFormGroup
    : props.notMarginBottom
    ? 'mb-3 mb-sm-0'
    : 'mb-3'
  const DisplayMessageErrors = () => (
    <Form.Control.Feedback type="invalid">
      <ul>
        {props.messageErrors?.map((v, i) => {
          return (
            <li key={i} className="error-input">
              {v.replace(/[*]$/g, '')}
            </li>
          )
        })}
      </ul>
    </Form.Control.Feedback>
  )

  if (!arrayTypes.includes(props.type)) {
    return (
      <>
        {!props.isNotNeedlabelBlock && <Form.Label column>{props.label}</Form.Label>}
        <InputGroup className={classFormGroup}>
          <Form.Control
            id={props.id ? props.id : props.name}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            placeholder={props.placeholder}
            required={props.required}
            readOnly={props.readOnly}
            multiple={props.multiple}
            className={props.className}
            autoComplete={props.autoComplete}
          />
          {props.children ? props.children : ''}
          {DisplayMessageErrors()}
        </InputGroup>
      </>
    )
  } else if (props.type === 'select') {
    return (
      <>
        {!props.isNotNeedlabelBlock && <Form.Label>{props.label}</Form.Label>}
        <InputGroup className={classFormGroup}>
          <Form.Control
            id={props.id ? props.id : props.name}
            name={props.name}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            placeholder={props.placeholder}
            required={props.required}
            readOnly={props.readOnly}
            multiple={props.multiple}
            autoComplete={props.autoComplete}
            as={props.type}
            className={`form-select ${props.className}`}
          >
            {props.children}
          </Form.Control>
          {DisplayMessageErrors()}
        </InputGroup>
      </>
    )
  } else if (props.type === 'textarea') {
    return (
      <>
        {!props.isNotNeedlabelBlock && <Form.Label>{props.label}</Form.Label>}
        <InputGroup className={classFormGroup}>
          <Form.Control
            id={props.id ? props.id : props.name}
            name={props.name}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            placeholder={props.placeholder}
            required={props.required}
            readOnly={props.readOnly}
            className={props.className}
            autoComplete={props.autoComplete}
            as={props.type}
          />
          {props.children ? props.children : ''}
          {DisplayMessageErrors()}
        </InputGroup>
      </>
    )
  } else if (props.type === 'checkbox' || props.type === 'radio') {
    return (
      <Form.Group>
        <Form.Check
          id={props.id ? props.id : props.name}
          name={props.name}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          placeholder={props.placeholder}
          required={props.required}
          readOnly={props.readOnly}
          multiple={props.multiple}
          className={props.className}
          autoComplete={props.autoComplete}
        />
      </Form.Group>
    )
  } else {
    return <></>
  }
}

// Input.propTypes = {
//   labelBlock: PropTypes.bool,
//   type: PropTypes.string,
//   name: PropTypes.string,
//   id: PropTypes.string,
//   onChange: PropTypes.func,
//   onKeyUp: PropTypes.func,
//   value: PropTypes.any,
//   cols: PropTypes.string,
//   placeholder: PropTypes.string,
//   required: PropTypes.bool,
//   errors: PropTypes.array,
//   messageErrors: PropTypes.array,
//   readOnly: PropTypes.bool,
//   multiple: PropTypes.bool,
//   className: PropTypes.string,
//   steps: PropTypes.string,
//   autoComplete: PropTypes.bool,
//   notMarginBottom: PropTypes.bool,
// }

export default Input
