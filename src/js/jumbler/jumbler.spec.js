import { getRandomLetter, jumbleWord, jumbleString } from './jumbler';

it('getRandomLetter should return one letter', () => {
	const letter = getRandomLetter();
	expect(letter).not.toBeUndefined();
	expect(letter).toHaveLength(1);
})

it('jumblestring should return string of random letters the same length as string given', () => {
	const word = 'firetruck';
	const jumbledWord = jumbleWord(word);
	expect(jumbledWord).not.toBeUndefined();
	expect(word.length).toEqual(jumbledWord.length);
	expect(word).not.toEqual(jumbledWord);
})

it('jumbleString should jumble letters and preserve spaces', () => {
	const str = 'this is a string';
	const jumbledStr = jumbleString(str);
	expect(jumbledStr).not.toEqual(str);
	expect(jumbledStr.length).toEqual(str.length);
	expect(jumbledStr.match(/ /g).length).toEqual(str.match(/ /g).length)
})