// Pet images are stored in the src/assets folder.
import charlieImg from './assets/charlie.jpg'
import rockyImg from './assets/rocky.jpg'
import lunaImg from './assets/luna.jpg'
import miloImg from './assets/milo.jpg'
import kiwiImg from './assets/kiwi.jpg'
import sunnyImg from './assets/sunny.jpg'

// JSON-style JavaScript data with 5 fields for each pet.
const petData = {
  pets: [
  { id: 1, name: 'Charlie', animal: 'dog', specialty: 'Loves fetching tennis balls', image: charlieImg },
  { id: 2, name: 'Rocky', animal: 'dog', specialty: 'Knows how to sit and shake paws', image: rockyImg },
  { id: 3, name: 'Luna', animal: 'cat', specialty: 'Expert at taking naps', image: lunaImg },
  { id: 4, name: 'Milo', animal: 'cat', specialty: 'Loves climbing and chasing toys', image: miloImg },
  { id: 5, name: 'Kiwi', animal: 'bird', specialty: 'Can copy funny sounds', image: kiwiImg },
  { id: 6, name: 'Sunny', animal: 'bird', specialty: 'Sings cheerful songs every morning', image: sunnyImg }
  ]
}

export default petData
