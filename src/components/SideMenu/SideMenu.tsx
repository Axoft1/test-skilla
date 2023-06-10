import { FC } from 'react'
import styles from './SideMenu.module.scss'
import {
  logo,
  results,
  orders,
  messages,
  calls,
  counterparties,
  documents,
  performers,
  reports,
  knowledgeBase,
  settings,
} from '../img'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

const SideMenu: FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={styles.nav}>
        <li>
          <ButtonMenu children="Итоги" img={results} />
        </li>
        <li>
          <ButtonMenu children="Заказы" img={orders} />
        </li>
        <li>
          <ButtonMenu children="Сообщения" img={messages} />
        </li>
        <li>
          <ButtonMenu active={true} children="Звонки" img={calls} />
        </li>
        <li>
          <ButtonMenu children="Контрагенты" img={counterparties} />
        </li>
        <li>
          <ButtonMenu children="Документы" img={documents} />
        </li>
        <li>
          <ButtonMenu children="Исполнители" img={performers} />
        </li>
        <li>
          <ButtonMenu children="Отчеты" img={reports} />
        </li>
        <li>
          <ButtonMenu children="База знаний" img={knowledgeBase} />
        </li>
        <li>
          <ButtonMenu children="Настройки" img={settings} />
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
