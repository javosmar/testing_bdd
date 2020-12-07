module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    add(clave, valor) {
        const buscar = this.find(clave);
        if (!buscar) {
            this.#elementos.push({ [clave]: valor });
        }
        else {
            for (let i = 0; i < this.#elementos.length; i++) {
                const key = Object.keys(this.#elementos[i]);
                if (key == clave) {
                    this.#elementos[i][clave] = valor;
                }
            }
        }
    }

    indexOf(clave) {
        for (let i = 0; i < this.#elementos.length; i++) {
            const key = Object.keys(this.#elementos[i]);
            if (key == clave) {
                return i;
            }
        }
        return NaN;
    }

    delete(clave) {
        const index = this.indexOf(clave);
        if(!isNaN(index)) {
            this.#elementos.splice(index, 1);
        }
    }

    find(clave) {;
        const index = this.indexOf(clave);
        if(!isNaN(index)) {
            return this.#elementos[index][clave];
        }
        return NaN;
    }

    count() {
        return this.#elementos.length;
    }
}