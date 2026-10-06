import Main from '../components/Main.jsx'

const concepts = [
  { number: '01', title: 'Компоненты', text: 'Header, Main и Footer — повторно используемые части интерфейса.' },
  { number: '02', title: 'Props и state', text: 'Props передают заголовок, state хранит счётчик и данные API.' },
  { number: '03', title: 'Маршруты', text: 'React Router переключает Главную и страницу О проекте без перезагрузки.' },
  { number: '04', title: 'Жизненный цикл', text: 'useEffect загружает посты при появлении списка и отменяет запрос при размонтировании.' },
]

export default function AboutView() {
  return (
    <Main
      eyebrow="О ПРОЕКТЕ"
      title={<>Как устроено<br />это SPA<span className="title-period">?</span></>}
      description="Приложение собрано из независимых React-компонентов. Маршрутизация, состояние и загрузка данных разделены по своей ответственности."
    >
      <section className="about-layout">
        <div className="about-note">
          <span className="about-note-mark">S/01</span>
          <h2>Одна страница.<br />Несколько представлений.</h2>
          <p>Интерфейс обновляется на клиенте: при переходе между разделами браузер не загружает документ заново.</p>
          <span className="about-stack">REACT <i>·</i> VITE <i>·</i> REACT ROUTER</span>
        </div>
        <div className="concept-list">
          {concepts.map((item) => (
            <article className="concept-item" key={item.number}>
              <span className="concept-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <span className="concept-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </Main>
  )
}
