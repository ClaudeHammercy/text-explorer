const prompt = require('prompt-sync')({ sigint: true });
let y = 0;
let x = 0;
let position = (x, y);

while (position !== (3, 3)) {
    const decision = Number(prompt('INTRO [1] North [2] South [3] East or [4] Weast:  '));
    console.log(decision);
    if (decision === 1) {
        console.log('You chose to head North!')
        //let position = ((x,y+1))
        y = y + 1;
        x = x + 0;
        //console.log(position);
        console.log('Your current position is ', '(' + x + ',' + y +')' + '.');
    }
    if (decision === 2) {
        console.log('You chose to head South!')
        y = y - 1;
        x = x + 0;
        console.log('Your current position is ', '(' + x + ',' + y + ')' + '.');
        const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
        console.log(decision);
    } if (decision === 3) {
        console.log('You chose to head East!')
        y = y + 0;
        x = x + 1;
        console.log('Your current position is ', '(' + x + ',' + y + ')' + '.');
        const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
        console.log(decision);
    } if (decision === 4) {
        console.log('You chose to head Weast!')
        y = y + 0;
        x = x - 1;
        console.log('Your current position is ', '(' + x + ',' + y + ')' + '.');
        const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
        console.log(decision);
    }
while (position === (3, 3)) {
    console.log('It\'s about time you made it! I guess you can have this gold or whatever.');
}
while (x === 1 && y === 0) {
    console.log('You have a long way to go. I think.');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 2 && y === 1) {
    console.log('Smells like pennies over here. Let \'s leave.');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 2 && y === 2) {
    console.log('Could be something good straight ahead. Could be a pile of stale poopoo.');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 3 && y === 2) {
    console.log('You might wanna reconsider that last step! Or not.');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 4 && y === 4) {
    console.log('What is this? Velvet?');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 0 && y === 4) {
    console.log('');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 0 && y === 3) {
    console.log('I think we\'re on the right track. Not exactly sure what we\'re looking ');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 0 && y === 3) {
    console.log('9876');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 1 && y === 3) {
    console.log('34235');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 0 && y === 3) {
    console.log('23');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 3 && y === 4) {
    console.log('97');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 2 && y === 3) {
    console.log('765');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 3 && y === 0) {
    console.log('645');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 3 && y === 5) {
    console.log('543');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 3 && y === 5) {
    console.log('23.');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
} while (x === 3 && y === 0) {
    console.log('3');
    const decision = Number(prompt(' > In which direction would you like to go next? [1] North [2] South [3] East or [4] Weast:  '));
}
}