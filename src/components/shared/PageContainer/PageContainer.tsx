import styles from "./PageContainer.module.css";

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <main className={styles["page-container"]}>
      <div className={styles["page-content"]}>
        <h1 className={styles["page-title"]}>{title}</h1>
        {children}
      </div>
    </main>
  );
}
