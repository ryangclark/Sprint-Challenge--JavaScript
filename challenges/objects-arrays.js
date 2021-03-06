// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

const trex = {
  name: 'tyrannosaurus',
  diet: 'carnivorous',
  weight: '7000kg',       //hey, big boy
  length: '12m',
  period: 'Late Cretaceious',
  speak: function() {return 'RAWERSRARARWERSARARARRRR!'}
}

const stegosaurus = {
  name: 'stegosaurus',
  diet: 'herbivorous',
  weight: '2000kg',
  length: '9m',
  period: 'Late Jurassic'
}

const velociraptor = {
  name: 'velociraptor',
  diet: 'carnivorous',
  weight: '15kg',
  length: '1.8m',
  period: 'Late Cretaceious'
}

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(`The ${trex.name} weighed an impressive ${trex.weight}!`);

// What was the diet of a velociraptor?
console.log(`The ${velociraptor.name} had a ${velociraptor.diet} diet.`);

// How long was a stegosaurus?
console.log(`The stegosaurus was ${stegosaurus.length} long.`);

// What time period did tyrannosaurus live in?
console.log(`The ${trex.name} lived in the ${trex.period} period.`);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(trex.speak());


// ==== Arrays ====

// Given an array of college graduates, complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];
for (let grad of graduates) {
  universities.push(grad.university);
};
universities.sort();
console.log(`Universities Array \n`, universities);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [];
for (let grad of graduates) {
  contactInfo.push(`${grad.first_name} ${grad.email}`);
}
console.log(`Contact Info Array \n`, contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];
for (let grad of graduates) {
  if (grad.university.toLowerCase().includes('uni')) {
    uni.push(grad.university);
  }
}
console.log(`Uni Array \n`, uni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.
// Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.
Return an array with only the animal and scientific names in it.
The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [];
zooAnimals.forEach(element => {
  animalNames.push(`Name: ${element.animal_name}, Scientific: ${element.scientific_name}`);
});
console.log(`Animal Names Array \n`, animalNames);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.
Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the result.

*/

const lowerCase = zooAnimals.map(element => element.animal_name.toLowerCase());
console.log(`Lower Case Name Array \n`, lowerCase);

/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count.
Find out which animals have a population less than 5.

*/
const largerPopulation = zooAnimals.filter(element => element.population < 5);
console.log(largerPopulation);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.
Find the total population from all the zoos using the .reduce() method.

*/
const populationReducer = (accumulator, currentValue) => accumulator + currentValue;
const populationTotal = zooAnimals.map(element => element.population).reduce(populationReducer);
console.log(`Population Total:`, populationTotal);

/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

