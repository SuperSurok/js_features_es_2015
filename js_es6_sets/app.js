// SETS - Stoer unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'Pasha' });
set1.add(true);
set1.add(100);

console.log(set1);

const set2 = new Set([1, true, 'string'])

console.log(set2);

// Get coutns
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has({ name: 'Pasha' })); // false

console.log({ name: 'Pasha' } === { name: 'Pasha' }) // false

// Delete from set
set1.delete(100);
console.log(set1);

// Iterate through sets
// For ... of
for (let i of set1) {
    console.log(i); // true
}

for (let i of set1.values()) {
    console.log(i); // true
}

for (let i of set1.keys()) {
    console.log(i); // true
}

for (let i of set1.entries()) {
    console.log(i); // true
}

// forEach Loop
set1.forEach((value) => {
    console.log(value)
})

// Convert set to array
const setArray = Array.from(set1);
console.log(setArray);