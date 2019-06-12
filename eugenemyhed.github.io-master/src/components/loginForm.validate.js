export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const passwordLength = value =>
    value && value.length < 6 ? 'Not less then 6 symbols' : undefined;

export const passwordSpaceCharacters = value =>
    value && !/^\S+$/g.test(value) ? 'No space characters' : undefined;