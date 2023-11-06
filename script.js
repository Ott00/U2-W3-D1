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

// ESERCIZIO DUE

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}
