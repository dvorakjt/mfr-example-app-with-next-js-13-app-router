import { PropsWithChildren } from "react";
import styles from './styles.module.css';

export function PageContainer({ children } : PropsWithChildren) {
  return (
    <main className={styles.page_container}>
      {children}
    </main>
  )
}