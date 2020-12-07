const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

const Lista = require('../../src/lista');

let contexto = {};

Given('una lista vacía', function () {
    contexto.lista = new Lista();
});

When('se agrega la pareja {}', function (pareja) {
    contexto.lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
});

Then('la lista tiene {int} elemento almacenado', function (cantidad) {
    expect(contexto.lista.count).to.equal(1);
});