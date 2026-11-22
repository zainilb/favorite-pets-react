function Search({ search, setSearch, pets }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">
        <label htmlFor="animalSearch" className="form-label fw-semibold">
          Search by animal type
        </label>
        <input
          id="animalSearch"
          type="text"
          className="form-control mb-4"
          placeholder="Type dog, cat, or bird"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Animal</th>
                <th>Specialty</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id}>
                  <td><img src={pet.image} alt={`${pet.name} the ${pet.animal}`} className="pet-photo" /></td>
                  <td className="fw-semibold">{pet.name}</td>
                  <td className="text-capitalize">{pet.animal}</td>
                  <td>{pet.specialty}</td>
                </tr>
              ))}
              {pets.length === 0 && (
                <tr><td colSpan="4" className="text-center py-4 text-secondary">No pets found. Try dog, cat, or bird.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Search
