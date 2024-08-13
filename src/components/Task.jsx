import styles from './styles/Task.module.css'
import trash from '../assets/trash.svg'
import { useState } from 'react'

export function Task({ content }) {
  const [checkBoxValue, setCheckBoxValue] = useState(false)

  function handleCheckBox() {
    console.log
    setCheckBoxValue(event.target.checked)
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        name="task"
        checked={checkBoxValue.task}
        onChange={handleCheckBox}
      />
      <span>{content}</span>
      <img className={styles.imgTask} src={trash} alt="" />
    </div>
  )
}
