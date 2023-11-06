// ESERCIZIO UNO

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static isSameAge(userA, userB) {
    if (userB.age > userA.age) {
      return userB.firstName + " è più vecchio di " + userA.firstName;
    } else if (userB.age < userA.age) {
      return userA.firstName + " è più vecchio di " + userB.firstName;
    } else {
      return userA.firstName + " e " + userB.firstName + " hanno la stessa età";
    }
  }
}

const user1 = new User("Giulio", "Bianchi", 18, "Roma");
const user2 = new User("Marco", "Rossi", 20, "Milano");
console.log(user1);
console.log(user2);

console.log(User.isSameAge(user1, user2));

console.log("---");

// ESERCIZIO DUE

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static compareOwner(ownerA, ownerB) {
    return ownerA.ownerName === ownerB.ownerName;
  }
}

const pet1 = new Pet("Lucky", "Riccardo", "dog", "labrador");
const pet3 = new Pet("Jenny", "Giovanni", "dog", "husky");
const pet4 = new Pet("Kira", "Riccardo", "dog", "bassotto");

console.log(Pet.compareOwner(pet1, pet4));

// const pets = [];

const createPetListAndShowIt = function (petInfo) {
  const petList = document.getElementById("petList");
  const list = document.createElement("ul");

  const listElementPet = document.createElement("li");
  listElementPet.innerText = "Pet Name: " + petInfo.petName;
  list.appendChild(listElementPet);

  const listElementOwner = document.createElement("li");
  listElementOwner.innerText = "Owner Name: " + petInfo.ownerName;
  list.appendChild(listElementOwner);

  const listElementSpecies = document.createElement("li");
  listElementSpecies.innerText = "Species: " + petInfo.species;
  list.appendChild(listElementSpecies);

  const listElementBreed = document.createElement("li");
  listElementBreed.innerText = "Breed: " + petInfo.breed;
  list.appendChild(listElementBreed);

  //   const petInfoEntries = Object.entries(petInfo);
  //   console.log(petInfoEntries);

  //   for (const [key, content] of petInfoEntries) {
  //     const listElement = document.createElement("li");
  //     listElement.innerText = key + " : " + content;
  //     list.appendChild(listElement);
  //   }

  petList.appendChild(list);
};

const petForm = document.getElementById("petForm");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petNameInput = document.getElementById("petName");
  const petName = petNameInput.value;
  const ownerNameInput = document.getElementById("ownerName");
  const ownerName = ownerNameInput.value;
  const speciesInput = document.getElementById("species");
  const species = speciesInput.value;
  const breedInput = document.getElementById("breed");
  const breed = breedInput.value;

  const petInfo = new Pet(petName, ownerName, species, breed);
  //   console.log(petInfo);

  //   pets.push(petInfo);
  //   console.log(pets);

  createPetListAndShowIt(petInfo);
  petForm.reset();
});
