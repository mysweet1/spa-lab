import { useEffect, useState } from 'react'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=12'

export default function PostsSection() {
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      try {
        const response = await fetch(POSTS_URL, { signal: controller.signal })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        setPosts(data)
        setStatus('success')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error')
      }
    }

    loadPosts()
    return () => controller.abort()
  }, [])

  const normalizedQuery = query.trim().toLocaleLowerCase('ru')
  const filteredPosts = posts.filter((post) =>
    `${post.title} ${post.body}`.toLocaleLowerCase('ru').includes(normalizedQuery),
  )

  return (
    <section className="posts-section" aria-labelledby="posts-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" />ВНЕШНИЙ API</p>
          <h2 id="posts-heading">Посты сообщества</h2>
        </div>
        <label className="search-field">
          <span className="sr-only">Поиск по заголовку и тексту поста</span>
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Найти пост…"
          />
        </label>
      </div>

      {status === 'loading' && <p className="notice">Загружаем публикации…</p>}
      {status === 'error' && (
        <div className="notice notice-error" role="alert">
          Не удалось загрузить данные. Проверьте подключение к интернету и обновите страницу.
        </div>
      )}
      {status === 'success' && filteredPosts.length === 0 && (
        <p className="notice">По запросу «{query}» ничего не найдено.</p>
      )}
      {status === 'success' && filteredPosts.length > 0 && (
        <>
          <p className="results-count">Показано {filteredPosts.length} из {posts.length} публикаций</p>
          <div className="posts-grid">
            {filteredPosts.map((post, index) => (
              <article className="post-card" key={post.id}>
                <div className="post-meta">
                  <span className="post-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>ПУБЛИКАЦИЯ</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <span className="post-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
