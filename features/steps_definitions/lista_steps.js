const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

const Lista = require('../../src/lista');

let contexto = {};

/**
 * +++++++++++++++++++
 * ++++++ GIVENs +++++++
 * +++++++++++++++++++
 */
Given('una lista vacía', function () {
    contexto.lista = new Lista();
});

Given('una lista con los siguientes elementos', function (tabla) {
    contexto.lista = new Lista();

    tabla.rawTable.forEach((pareja) => {
        contexto.lista.add(eval(pareja[0]), eval(pareja[1]));
    });
});

/**
 * +++++++++++++++++++
 * ++++++ WHENs +++++++
 * +++++++++++++++++++
 */
When('se agrega la pareja {}', function (pareja) {
    pareja = JSON.parse(pareja);
    contexto.lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
});

When('se elimina la clave {string}', function (clave) {
    contexto.lista.delete(clave);
});

When('se busca la clave {string}', function (clave) {
    contexto.encontrado = contexto.lista.find(clave);
});

/**
 * +++++++++++++++++++
 * ++++++ THENs +++++++
 * +++++++++++++++++++
 */
Then('la lista tiene {int} elemento(s) almacenado(s)', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});

Then('se obtiene el valor NaN', function () {
    expect(contexto.encontrado).is.NaN;
});

Then('se obtiene el valor {string}', function (valor) {
    expect(contexto.encontrado).is.equal(valor);
});

// Then('la lista tiene {int} elemento', function (cantidad) {
//     expect(contexto.lista.count()).to.equal(cantidad);
// });