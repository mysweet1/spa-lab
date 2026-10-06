export default function Main({ title, eyebrow, description, children }) {
  return (
    <main className="page-main">
      <section className="page-intro">
        {eyebrow && <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="intro-copy">{description}</p>}
      </section>
      {children}
    </main>
  )
}
