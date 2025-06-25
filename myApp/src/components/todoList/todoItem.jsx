import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";
const TodoItem = ({ onDelete, disabled, task, onEdit }) => {
  return (
    <li className="taskItem">
      <span className="taskItemText">{task}</span>
      <div className="taskActions">
        <button disabled={disabled} className="editBtn" onClick={onEdit}>
          <EditIcon />
        </button>
        <button disabled={disabled} onClick={onDelete} className="dltBtn">
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
