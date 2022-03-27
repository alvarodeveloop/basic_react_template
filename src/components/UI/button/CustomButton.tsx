import React, { PropsWithChildren, ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { EnumType } from 'typescript';

enum ButtonTypes {
  'buttton',
  'submit',
    'reset',
    undefined
}

interface ButtonProps {
    className?: string
    size?: any
    block?: boolean
    variant?: string
    onClick?: (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    type?: any
}

 const CustomButton : React.FC<ButtonProps> = ({ children, ...rest }) => {
    const blockClass = rest.block ? "full-width" : "";
    const classStyles = rest.className ? rest.className : "";
    let typeButton;
    switch (rest.variant) {
        case "secondary":
            typeButton = "button-secondary";
            break;
        case "blue":
            typeButton = "button-blue";
            break;
        case "secondary-blue":
            typeButton = "secondary-button-blue";
            break;
        case "link":
            typeButton = "btn-link";
            break;
        case "gray":
            typeButton = "button-gray";
            break;
        case "purple":
            typeButton = "button-purple";
            break;
        case "purple-secondary":
            typeButton = "button-purple-secondary";
            break;

        default:
            typeButton = "button-primary";
            break;
    }

    return (
        <Button {...rest}
            className={`${typeButton} ${blockClass} ${classStyles}`}
            >
            {children}
        </Button>
    )
}

export default CustomButton