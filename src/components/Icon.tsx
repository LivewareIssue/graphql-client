import React, { SVGProps } from "react";
import * as stylex from "@stylexjs/stylex";

import { ReactComponent as CaretRight } from '../icons/caret-right.svg';
import { ReactComponent as Clipboard } from '../icons/clipboard.svg';
import { ReactComponent as Code } from '../icons/code.svg';
import { ReactComponent as Copy } from '../icons/copy.svg';
import { ReactComponent as Diff } from '../icons/diff.svg';
import { ReactComponent as Flask } from '../icons/flask.svg';
import { ReactComponent as Graph } from '../icons/graph.svg';
import { ReactComponent as Home } from '../icons/home.svg';
import { ReactComponent as PuzzlePiece } from '../icons/puzzle-piece.svg';
import { ReactComponent as UserCircle } from '../icons/user-circle.svg';
import { ReactComponent as Spinner } from '../icons/spinner.svg';

export type IconSize = 'small' | 'medium' | 'large';

type Props = {
  svg: React.FunctionComponent<SVGProps<SVGSVGElement>>,
  size?: IconSize,
  style?: stylex.StyleXStyles
};

const Icon = ({size = 'medium', style, ...props}: Props & {}) => {
  return <props.svg {...stylex.props(styles.base, styles[size], style)}/>
}

const styles = stylex.create({
  base: {
    fill: 'inherit',
    color: 'inherit'
  },
  small: {
    width: '16px',
    height: '16px'
  },
  medium: {
    width: '24px',
    height: '24px'
  },
  large: {
    width: '32px',
    height: '32px'
  }
});

export type Icon = React.FunctionComponent<Omit<Props, 'svg'>>;

export const CaretRightIcon: Icon = (props) =>
  <Icon svg={CaretRight} {...props} />;

export const ClipboardIcon: Icon = (props) =>
  <Icon svg={Clipboard} {...props} />;

export const CodeIcon: Icon = (props) =>
  <Icon svg={Code} {...props} />;

export const DiffIcon: Icon = (props) =>
  <Icon svg={Diff} {...props} />;

export const FlaskIcon: Icon = (props) =>
  <Icon svg={Flask} {...props} />;

export const GraphIcon: Icon = (props) =>
  <Icon svg={Graph} {...props} />;

export const HomeIcon: Icon = (props) =>
  <Icon svg={Home} {...props} />;

export const PuzzlePieceIcon: Icon = (props) =>
  <Icon svg={PuzzlePiece} {...props} />;

export const UserCircleIcon: Icon = (props) =>
  <Icon svg={UserCircle} {...props} />;

export const SpinnerIcon: Icon = (props) =>
  <Icon svg={Spinner} {...props} />;

export const CopyIcon: Icon = (props) =>
  <Icon svg={Copy} {...props} />;

export default Icon;