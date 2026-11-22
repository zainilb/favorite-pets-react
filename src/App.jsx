import { useState } from 'react'
import petData from './data'
import Search from './Search'

function App() {
  const [search, setSearch] = useState('')

  // The filter ignores uppercase and lowercase letters.
  const filteredPets = petData.pets.filter((pet) =>
    pet.animal.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <div className="container py-5" style={{ maxWidth: '900px' }}>
      <h1 className="text-center fw-bold mb-2">🐾 My Favorite Pets</h1>
      <p className="text-center text-secondary mb-4">
        Search for your favorite animal: dog, cat, or bird!
      </p>
      <Search search={search} setSearch={setSearch} pets={filteredPets} />
    </div>
  )
}

export default App
