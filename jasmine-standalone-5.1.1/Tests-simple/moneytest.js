import {formatCurrency} from '../../script/utils/money.js';

console.log('test suit: formatecurrency');
console.log('convert cents into dollars');
if(formatCurrency(2095)==='20.95')
    {
        console.log('passed!');
    }
else{
    console.log('failed!');
}

console.log('work with 0')
if(formatCurrency(0)==='0.00')
    {
        console.log('passed!');
    }
else{
    console.log('failed!');
}

console.log('round up nears cents');
if(formatCurrency(2000.5)==='20.01')
    {
        console.log('passed!');
    }
else{
    console.log('failed!');
}