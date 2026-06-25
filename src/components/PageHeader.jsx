// src/components/PageHeader.jsx
export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="wg-page-header">
      {eyebrow && <div className="wg-page-header__eyebrow">{eyebrow}</div>}
      <h1 className="wg-page-header__title">{title}</h1>
      {description && <p className="wg-page-header__desc">{description}</p>}
    </div>
  )
}