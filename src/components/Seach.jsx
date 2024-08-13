import styles from './styles/Seach.module.css'
import more from '../assets/icons/more.svg'
import clipboard from '../assets/clipboard.svg'

import { useState } from 'react'
import { Task } from './Task'

export function Seach() {
  const [tasks, setTasks] = useState([
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  ])

  const [newTask, setNewTask] = useState('')

  const isNewTaskEmpty = newTask.length == 0

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTask])
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value)
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.itens}>
        <textarea
          onChange={handleNewTaskChange}
          placeholder="Adicione uma nova tarefa"
          name="task"
          required
        ></textarea>
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar<img src={more}></img>
        </button>
      </form>

      <div className={styles.tasks}>
        <div className={styles.header}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluídas <span>0</span>
          </p>
        </div>
        <div className={styles.empty}>
          {tasks.map(task => {
            if (task == '') {
              return (
                <div className={styles.content}>
                  <img
                    src={clipboard}
                    alt="Ícone de um área de transferência"
                  />
                  <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <br />
                    Crie tarefas e organize seus itens a fazer
                  </p>
                </div>
              )
            } else {
              return <Task key={task} content={task} />
            }
          })}
        </div>
      </div>
    </article>
  )
}
