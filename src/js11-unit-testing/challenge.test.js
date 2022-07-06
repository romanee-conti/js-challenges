import * as challenge from "./js11";

test('Should return correct string', () => {
    expect(challenge.greet()).toBe('Hello, nice to meet you');
})

test('Should add two numbers together', () => {
    expect(challenge.sumTwoNumbers(5, 7)).toEqual(12);
})

test('Should return string based on which number is larger', () => {
    expect(challenge.checkLarger(3, 5)).toBe('5 is bigger than 3');
})

test('Should return new array of names based on length', () => {
    expect(challenge.filterByLength(
        ['Martin', 'Jeff', 'Esmeralda', 'Don', 'Piggy', 'Dr. Isosceles']
    )).toMatchObject(
        ['Martin', 'Jeff', 'Don', 'Piggy']
    )
})

test('Should reduce numbers in array by specified amount', () => {
    expect(challenge.reduceNumbers([2, 86, 111], 16)).toMatchObject([0, 70, 95])
})