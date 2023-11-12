import { ReactNode } from 'react';
import styles from './styles.module.css';

interface LegendProps {
  children : ReactNode
}

export function Legend({ children } : LegendProps) {
  return <legend className={styles.legend}>{children}</legend>
}