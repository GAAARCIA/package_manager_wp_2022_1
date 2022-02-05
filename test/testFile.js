const sumar = require("../index");
const assert = require("assert");


// Asserts = Afirmación
//50% test

describe("Probar la suma de dos números", ()=>{
  //Afirmamos que cinco más cinco es 10
  it("Cinco mas cinco son 10", ()=>{
    assert.equal(10, sumar(5,5));
  });
  //Afirmamos que cinco más siete no son 10
  it("Cinco mas siete no son 10", ()=>{
    assert.notEqual(10, sumar(5,7));
  })
});
