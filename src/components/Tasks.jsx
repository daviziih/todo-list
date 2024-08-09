import styles from './styles/Tasks.module.css'
import clipboard from '../assets/clipboard.svg'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <div className={styles.header}>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </div>
      <div className={styles.empty}>
        <div className={styles.content}>
          <img src={clipboard} alt="Ícone de um área de transferência" />
          <p>
            <span>Você ainda não tem tarefas cadastradas</span>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </section>
  )
}
