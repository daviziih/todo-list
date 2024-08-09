import { Header } from './components/Header'
import { Seach } from './components/Seach'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

import './App.module.css'
import './global.css'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Seach />
      <Tasks />
    </div>
  )
}
