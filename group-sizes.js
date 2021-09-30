const prompt = require('prompt-sync')();

const groupSize = Number(prompt('Enter class size: '));

// Handle a remainder of zero (when class size is divided by three)
if (groupSize % 3 === 0) {
    console.log(groupSize / 3, 'groups of threes');
}

// Handle a remainder of one
else if (groupSize % 3 === 1) {
    const numGroupOfThree = (groupSize - 4) / 3;
    const numGroupOfTwo = 2;
    console.log(numGroupOfThree, 'groups of three, ', numGroupOfTwo, 'groups of two');
}

// Handle a remainder of two
else if (groupSize % 3 === 2) {
    const numGroupOfThree = (groupSize - 2) / 3;
    const numGroupOfTwo = 1;
    console.log(numGroupOfThree, 'groups of three,' , numGroupOfTwo, 'groups of two');  
}

else {
    console.log('error');
}