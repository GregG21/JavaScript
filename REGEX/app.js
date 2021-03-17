let re;
re = /hello/;
re =/hello/i;

re = /^h/i; //Starts with h
re = /d$/i; // ends with D,d
re = /^hello$/i; //start and ends with hello
re = /h.llo/i; // . matches one char
re = /h*llo/i // matches any char 0 or more times

re = /gre?a?y/i;
re = /gre?a?y\?/i;



re = /gr[ea]y\?/i; // must be an a or e
re = /[^GF]ray/i; // Matches anything but G or F


const str = 'Hello world hello';

function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);


const result = re.exec('hello world');

console.log(`The letter ${result} is at index: ${result.index}`);