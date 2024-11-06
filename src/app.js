export default class ErrorRepository {
    constructor(...errors) {
        this.map = new Map;
        errors.forEach((error) => this.map.set(error.code, error.text));
    }

    translate(code) {
        return this.map.get(code) || 'Unknown error';
    }
}

const err1 = {
    code: 1,
    text: 'Fatal',
};

const err2 = {
    code: 2,
    text: 'Bad',
};

const err3 = {
    code: 3,
    text: 'Very bad error',
};

const err4 = {
    code: 3,
    text: 'Very bad error',
};

export const errors = [err1, err2, err3, err4];

export const errRep = new ErrorRepository(...errors);

console.log(errRep.map.size);

