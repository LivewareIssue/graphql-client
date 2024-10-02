import * as stylex from '@stylexjs/stylex';
import {colors} from '../colors.stylex';
import { HTMLInputTypeAttribute } from 'react';

type Props = {
  type?: HTMLInputTypeAttribute,
  placeholder?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  style?: stylex.StyleXStyles
};

const Input = ({style, ...props}: Props) =>
  <input {...props} {...stylex.props(theme.input, style)} />;

const theme = stylex.create({
  input: {
    borderWidth: '1px',
    borderColor: colors.lineColor,
    borderStyle: 'solid',
    borderRadius: '3px',
    padding: '8px 10px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1,
    color: colors.primaryText,
    ":focus": {
      boxShadow: `inset 0 0 0 3px ${colors.accentTint}`,
      borderColor: colors.accentShade,
    }
  }
});

export default Input;