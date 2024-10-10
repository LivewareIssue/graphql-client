import * as stylex from '@stylexjs/stylex';
import Button from './Button';
import { ReactNode } from 'react';
import { type Props as ButtonProps } from './Button';

type Props = {
  icon: ReactNode,
} & ButtonProps ;

const IconButton = ({icon, style, ...props}: Props) => {
  return <Button style={[styles.base, style]} {...props}>{icon}</Button>;
}

const styles = stylex.create({
  base: {
    borderRadius: 0,
    padding: 2,
  }
});

export default IconButton;