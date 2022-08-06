//Quick Questions
//What does the following code return?

let s = new Set([1,1,2,2,3,4]) // Set(4) {1, 2, 3, 4}

let s1 = [...new Set("referee")].join("") // 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // Map(2) {[1,2,3]: true, [1,2,3]: false}

//hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr) {
	return arr.length !== [...new Set(arr)].length ? true : false;
}

console.log(hasDuplicate([1,3,2,1]))
console.log(hasDuplicate([1,5,-1,4]))

//vowelCount
vowelCount('Awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(word) {
	const vowels = 'aeiou';
	let vowelMap = new Map();
	for (let letter of word.toLowerCase()) {
		if (vowels.includes(letter)) {
			if (vowelMap.has(letter)) {
				vowelMap.set(letter, vowelMap.get(letter) + 1);
			} else {
				vowelMap.set(letter, 1);
			}
		}
	}
	return vowelMap;
}

console.log(vowelCount('Abdrau Kuat'))