import styles from './Table.module.scss';
import type { CSSProperties } from 'react';

type TableColumn = {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
};

type TableRow = Record<string, string | number | null | undefined>;

type TableProps = {
  columns: TableColumn[];
  rows: TableRow[];
  minWidth?: string;
  mobileCard?: boolean;
  thColor?: string;
  thBackground?: string;
  tdColor?: string;
  tdBackground?: string;
  borderColor?: string;
  className?: string;
};

export function Table({
  columns,
  rows,
  minWidth = '720px',
  mobileCard = false,
  thColor,
  thBackground,
  tdColor,
  tdBackground,
  borderColor,
  className = '',
}: TableProps) {
  const mergedClassName = [styles.wrapper, mobileCard ? styles.mobileCard : '', className].filter(Boolean).join(' ');

  const customStyle: CSSProperties = {
    ...({ '--table-min-width': minWidth } as CSSProperties),
    ...(thColor ? ({ '--table-th-color': thColor } as CSSProperties) : {}),
    ...(thBackground ? ({ '--table-th-background': thBackground } as CSSProperties) : {}),
    ...(tdColor ? ({ '--table-td-color': tdColor } as CSSProperties) : {}),
    ...(tdBackground ? ({ '--table-td-background': tdBackground } as CSSProperties) : {}),
    ...(borderColor ? ({ '--table-border-color': borderColor } as CSSProperties) : {}),
  };

  return (
    <div className={mergedClassName} style={customStyle}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} style={{ textAlign: column.align ?? 'left' }}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {columns.map((column) => {
                const value = row[column.key];
                return (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    data-label={column.header}
                    style={{ textAlign: column.align ?? 'left' }}
                  >
                    {value ?? '-'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
