module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    add(clave, valor) {
        this.#elementos.push({ [clave]: valor });

        // const buscar = this.find(clave);
        // if (!buscar) {
        //     this.#elementos.push({ [clave]: valor });
        // }
        // else {
        //     for (let i = 0; i < this.#elementos.length; i++) {
        //         const key = Object.keys(this.#elementos[i]);
        //         if (key == clave) {
        //             this.#elementos[i][clave] = valor;
        //         }
        //     }
        // }
    }

    count() {
        return this.#elementos.length;
    }

    delete(clave) {
        for (let i = 0; i < this.#elementos.length; i++) {
            const key = Object.keys(this.#elementos[i]);
            if (key == clave) {
                this.#elementos.splice(i, 1);
                return;
            }
        }
    }
}