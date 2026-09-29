import { useState } from 'react'

function ProductCard({ name, price }) {
  const [count, setCount] = useState(0)

  return (
    <article className="product-card">
      <div className="product-card__topline">
        <span className="product-card__label">Товар</span>
        <span className="product-card__price">
          {price.toLocaleString('ru-RU')} ₽
        </span>
      </div>

      <h2 className="product-card__name">{name}</h2>

      <div className="product-card__counter">
        <span className="product-card__count-label">Количество</span>
        <div className="counter-controls">
          <button
            className="counter-button"
            type="button"
            aria-label={`Уменьшить количество: ${name}`}
            onClick={() => setCount((currentCount) => Math.max(0, currentCount - 1))}
          >
            −
          </button>
          <output className="counter-value" aria-live="polite">{count}</output>
          <button
            className="counter-button counter-button--add"
            type="button"
            aria-label={`Увеличить количество: ${name}`}
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
