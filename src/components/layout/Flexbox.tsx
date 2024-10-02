import * as stylex from '@stylexjs/stylex';

type Props = {
  style?: stylex.StyleXStyles,
  children?: React.ReactNode
};

const Flexbox = ({style, children}: Props) => <div {...stylex.props(styles.base, style)}>{children}</div>;

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default Flexbox; 