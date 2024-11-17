import * as stylex from '@stylexjs/stylex';
import IconButton from './IconButton';
import { CopyIcon } from './Icon';
import { colors } from '../colors.stylex';
import { useCallback, useRef, useState } from 'react';
import * as Tooltip from "@radix-ui/react-tooltip";

type Props = {
  clipboardValue: string,
  tooltip?: string,
} & CopyButtonTooltipContentProps;

const CopyButton = ({clipboardValue, ...props}: Props) => {
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(clipboardValue);
  }, [clipboardValue]);

  const ref = useRef<HTMLButtonElement>(null);

  return <Tooltip.Provider>
    <Tooltip.Root >
      <Tooltip.Trigger ref={ref} onClick={e => e.preventDefault()}>
        <IconButton onClick={copyToClipboard} style={styles.base} icon={<CopyIcon size='small'/>} />
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <CopyButtonTooltipContent {...props} />
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
}

type CopyButtonTooltipContentProps = {
  tooltip?: string,
  tooltipAfterCopy?: string,
};

const CopyButtonTooltipContent = ({tooltip, tooltipAfterCopy}: CopyButtonTooltipContentProps) => {
  const [content, setContent] = useState(tooltip ?? 'Copy to clipboard.');

  return <Tooltip.Content onPointerDownOutside={e => {
    e.preventDefault();
    setContent(tooltipAfterCopy ?? 'Copied!');
  }}
    side='right'
    sideOffset={5}
    {...stylex.props(styles.tooltip)}>
    {content}
  </Tooltip.Content>
};

const styles = stylex.create({
  base: {
    backgroundColor: 'inherit',
    fill: colors.tertiaryText,
    ":hover": {
      backgroundColor: '#d4d1cf',
      fill: colors.primaryText
    },
    ":active": {
      backgroundColor: '#bab6b3',
      fill: 'black'
    }
  },
  tooltip: {
    width: 'fit-content',
    borderRadius: '4px',
    padding: '10px 15px',
    fontSize: '15px',
    lineHeight: 1,
    backgroundColor: 'white',
    userSelect: 'none'
  }
});

export default CopyButton;