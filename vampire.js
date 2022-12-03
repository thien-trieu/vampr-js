class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let result = false;

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return result;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }


  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

    if (this.name === name){
      return this
    }
    
    for (const child of this.offspring){
      const result = child.vampireWithName

      if (result){
        return result
      }
    }

    return null
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

    let total = 1

    for (const child of this.offspring){
      total += child.totalDescendents
    }
    return total 
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenniaVampires = []

    if (this.yearConverted >= 1980){
      millenniaVampires.push(this)
    }

    for (const child of this.offspring){
      const result = child.allMillennialVampires
      
      millenniaVampires = millenniaVampires.concat(result)
    }
    return millenniaVampires
  }

  
}

const francis = new Vampire('Francis', 1979);
const computer = new Vampire('Computer', 2022);
const emily = new Vampire('Emily', 2021);
const woowoo = new Vampire('WooWoo', 2022);

francis.addOffspring(emily);
francis.addOffspring(computer);
emily.addOffspring(woowoo);



module.exports = Vampire;

