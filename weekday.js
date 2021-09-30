const prompt = require('prompt-sync');

const number = (prompt('Please enter name: '));

if (number === 1) {
    console.log('That number goes with Monday');
} else if (number === 2) {
    console.log('That number goes with Tuesday');
} else if (number === 3) {
    console.log('That number goes with Wednesday');
} else if (number === 4) {
    console.log('That number goes with Thursday');
} else if (number === 5) {
    console.log('That number goes with Friday');
} else if (number === 6) {
    console.log('That number goes with Saturday');
} else if (number === 7) {
    console.log('That number goes with Sunday');
} else {
    console.log('That is an error.')
}