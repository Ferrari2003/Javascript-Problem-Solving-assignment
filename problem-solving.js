/* First Problem */

function mindGame(num) {
    const result = ((num * 3) + 10) / 2 - 5;
    return result;
}

const output = mindGame(9);
console.log(output);

// Description..?
/* 
In the fast problem we saw the output of the function multiply by three and add by 10 and two minus five.
*/


// Second Problem;

function evenOdd(str) {
    const length = str.length;
    if (length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

const stringPrint = evenOdd('isEven');

console.log(stringPrint);

// Description..?

/* Check the length of a sting in the if return event and see the ins return add output */

// Third Problem;

function isLGSeven(num) {
    const diff = Math.abs(num - 7);
    return diff < 7 ? num - 7 : num * 2;
}
const total = isLGSeven(20);
console.log(total);

// Description..?

/* By subtracting seven with an input, I have returned the result if the subtraction is less than the addition */


// Fourth Problem;


function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

const data = [1, -2, 3, -4, 5, -6];
const badArray = findingBadData(data);
console.log(badArray);


// Description..?

/* I saw the output of running with an error badData for loop */

// Firth Problem;

function gemsToDiamond(gems1, gems2, gems3) {
    const power1 = 21;
    const power2 = 32;
    const power3 = 43;
    
    const diamonds1 = gems1 * power1;
    const diamonds2 = gems2 * power2;
    const diamonds3 = gems3 * power3;
    
    const totalDiamonds = diamonds1 + diamonds2 + diamonds3;
    
    if (totalDiamonds > 1000) {
      return totalDiamonds - 2000;
    } else {
      return totalDiamonds;
    }
  }

  const allFriend =gemsToDiamond(10, 20, 30);
  console.log(allFriend);


//   Description..?

/* By multiplying the age of the friends with the input and adding the total to the times I saw the output with if els */
