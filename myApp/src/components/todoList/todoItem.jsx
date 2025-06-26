import styles from "./todo.module.css";
import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";
const TodoItem = ({ onDelete, disabled, task, onEdit }) => {
  return (
    <li className={styles.taskItem}>
      <span className={`${styles.taskItemText} ${styles.text}`}>{task}</span>
      <div className={styles.taskActions}>
        <button
          disabled={disabled}
          className={`${styles.taskbtn} ${styles.editBtn}`}
          onClick={onEdit}
        >
          <EditIcon />
        </button>
        <button
          disabled={disabled}
          onClick={onDelete}
          className={`${styles.taskbtn} ${styles.dltBtn}`}
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
