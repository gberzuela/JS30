// Data to work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

console.log(`Inventors: ${inventors}`);
console.log(`People: ${people}`);


// Array.prototype.filter()
console.log('--------------------');
console.log('1. Filter the list of inventors for those who were born in the 1500\'s');

const fifteen = inventors.filter( person => 1500 <= person.year && person.year < 1600 );
// console.log(fifteen)
// .table will present the array of objects in a table
console.table(fifteen);


// Array.prototype.map()
console.log('--------------------');
console.log('2. Give an array of the inventory first and last names');

const names = inventors.map( person => {return `${person.first} ${person.last}`});
console.table(names);


// Array.prototype.sort()
console.log('--------------------');
console.log('3. Sort the inventors by birthday, earliest to latest');

const birthday = inventors.sort( (first, second) => {
    return first.year > second.year ? 1 : -1;
} );
console.table(birthday);


// Array.prototype.reduce()
console.log('--------------------');
console.log('4. How many years did all the inventors live?');

const years = inventors.reduce( (total, person) => {
    return total + (person.passed - person.year);
}, 0)
console.log(years);


// Sorting by different condition
console.log('--------------------');
console.log('5. Sort the inventors by years lived from oldest to youngest');

const age = inventors.sort( (first, second) => {
    return (first.passed - first.year) < (second.passed - second.year) ? 1 : -1;
})
console.table(age);

// Using a separate link to find certain categories and names within those links
console.log('--------------------');
console.log('6. create a list of boulevards in Paris that contain "de" anywhere in the name');
console.log('https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris');

/*  Run on the wiki page provided */
// // const category = document.querySelectorAll('.mw-category a'); combines both lines
// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');

// // links is a Node list, we need to convert it to an Array to use .map
// const de = Array.from(links).map( link => link.textContent )
//                             .filter( boulevard => boulevard.includes('de'));
// console.log(de);

// More sorting
console.log('--------------------');
console.log('7. Sort the people alphabetically by last name');

const peopleNames = people.sort( (first, second) => {
    return first.split(', ')[1] > second.split(', ')[1] ? 1 : -1;
});
console.log(peopleNames);


// Another reduce problem
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

console.log('--------------------');
console.log('8. Sum up the instance of each of these: ');
console.log(data);

const organized = data.reduce( (accum, item) => {
    accum[item] ? accum[item]++ : accum[item] = 1;
    return accum;
}, {})
console.log(organized);