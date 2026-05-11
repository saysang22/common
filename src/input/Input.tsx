import styles from './Input.module.scss';
import type { CSSProperties, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  fontSize?: string;
  width?: string;
  widht?: string;
  background?: string;
  textColor?: string;
  padding?: string;
  round?: string;
  focusBorderColor?: string;
};

export function Input({
  className = '',
  type = 'text',
  fontSize,
  width,
  widht,
  background,
  textColor,
  padding,
  round,
  focusBorderColor,
  style,
  ...props
}: InputProps) {
  const mergedClassName = [styles.container, className].filter(Boolean).join(' ');
  const resolvedWidth = width ?? widht;

  const customStyle: CSSProperties = {
    ...style,
    ...(fontSize ? { fontSize } : {}),
    ...(resolvedWidth ? { width: resolvedWidth } : {}),
    ...(padding ? { padding } : {}),
    ...(round ? { borderRadius: round } : {}),
    ...(background ? ({ '--input-background': background } as CSSProperties) : {}),
    ...(textColor ? ({ '--input-text-color': textColor } as CSSProperties) : {}),
    ...(focusBorderColor ? ({ '--input-focus-border-color': focusBorderColor } as CSSProperties) : {}),
  };

  return <input type={type} className={mergedClassName} style={customStyle} {...props} />;
}
