// styles
import styles from "../styles.module.scss";

export const FeedbackTableHead = () => (
  <div className={styles.tableHeader}>
    <div
      id="tableColumn"
      style={{
        minWidth: 100,
        paddingLeft: 0,
        paddingRight: 12,
        flex: "1 0 100px",
      }}
    ></div>
    <div
      id="tableColumn"
      style={{
        minWidth: 120,
        paddingLeft: 0,
        paddingRight: 12,
        flex: "1 0 120px",
      }}
    >
      <span>Модератор</span>
    </div>
    <div
      id="tableColumn"
      style={{
        minWidth: 120,
        paddingLeft: 0,
        paddingRight: 12,
        flex: "1 0 120px",
      }}
    >
      <span>Платформа</span>
    </div>
    <div
      id="tableColumn"
      style={{
        minWidth: 180,
        paddingLeft: 0,
        paddingRight: 0,
        flex: "1 0 180px",
      }}
    >
      <span>Содержание</span>
    </div>
    <div
      id="tableColumn"
      style={{
        minWidth: 200,
        paddingLeft: 0,
        paddingRight: 0,
        flex: "1 0 200px",
      }}
    >
      <span>Статус</span>
    </div>
  </div>
);
