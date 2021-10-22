export function addPet(pet) {
    return {
        type: 'ADD_PET',
        pet: {
            name: pet.name,
            age: pet.age,
            species: pet.species,
            gender: pet.gender
        }
    }
}