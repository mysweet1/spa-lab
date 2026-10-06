import Main from '../components/Main.jsx'
import Counter from '../components/Counter.jsx'
import PostsSection from '../components/PostsSection.jsx'

export default function HomeView() {
  return (
    <Main
      eyebrow="ОДНОСТРАНИЧНОЕ ПРИЛОЖЕНИЕ · REACT"
      title={<>Идеи в движении<span className="title-period">.</span></>}
      description="Небольшая лаборатория SPA: компоненты, состояние и публикации из открытого API — в одном интерфейсе."
    >
      <section className="feature-row" aria-label="Интерактивность">
        <div className="feature-copy">
          <span className="feature-icon">✳</span>
          <div>
            <h2>Состояние меняется мгновенно</h2>
            <p>Счётчик обновляет интерфейс без перезагрузки страницы.</p>
          </div>
        </div>
        <Counter />
      </section>
      <PostsSection />
    </Main>
  )
}
