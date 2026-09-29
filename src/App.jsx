import ProductCard from './ProductCard.jsx'

const products = [
  { id: 1, name: 'Кофе в зернах', price: 890 },
  { id: 2, name: 'Шоколад темный', price: 240 },
  { id: 3, name: 'Чай листовой', price: 560 },
]

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="course-label">React · ls4</p>
        <h1>Счётчик товара</h1>
        <p className="student-name">Магамед Вахаевич Дзангиев</p>
      </header>

      <section className="product-grid" aria-label="Товары">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
    </main>
  )
}

export default App
