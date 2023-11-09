import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export function ButtonsContainer({ children } : PropsWithChildren) {
  return (
    <div className={styles.buttons_container}>
      {children}
    </div>
  )
}