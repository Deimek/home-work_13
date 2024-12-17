
const array = [1, NaN, 12, '123', 2, null, { a: 10 }];

function arithmetic(arr) {
    let arrNew = [];


    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            arrNew.push(arr[i]);
        }
    }

    let sum = 0;
    for (let item of arrNew) {
        sum += item;
    }

    return sum / arrNew.length;
}

const result = arithmetic(array);
console.log(result);




