import styles from './styles/Seach.module.css'
import more from '../assets/icons/more.svg'

export function Seach() {
  return (
    <section>
      <div className={styles.itens}>
        <textarea placeholder="Adicione uma nova tarefa"></textarea>
        <button>
          Criar<img src={more}></img>
        </button>
      </div>
    </section>
  )
}
