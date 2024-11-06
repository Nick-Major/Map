import ErrorRepository, { errors, errRep } from "../src/app";

test ('creating new ErrorRepository', ()=> {
    let rep = new ErrorRepository(...errors);
    let result = 3;
    expect(rep.map.size).toBe(result);
});

test.each([
    [1, 'Fatal'],
    [2, 'Bad'],
    [3, 'Very bad error'],
])('getting the error text', (code, text) => {
    expect(errRep.translate(code)).toBe(text);
});
