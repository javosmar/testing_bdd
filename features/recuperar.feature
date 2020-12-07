# language: es
# encoding: utf-8

Característica: Obtener elementos almacenados en la lista

Escenario: Obtener la lista ordenada de claves
    Dado una lista con los siguientes elementos
    | "c" | 3 |
    | "b" | 2 |
    | "a" | 1 |
    | "d" | 4 |
    Cuando se pide la lista ordenada
    Entonces se obtiene la lista ordenada de claves
    | a | b | c | d |

Escenario: Obtener la cantidad de elementos de una lista
    Dado una lista con los siguientes elementos
    | "c" | 3 |
    | "b" | 2 |
    | "a" | 1 |
    | "d" | 4 |
    Cuando se pide la cantidad de elementos
    Entonces se obtiene un total de 4

Escenario: Agregar un elemento existente
    Dado una lista con los siguientes elementos
    | "uno" | 1 |
    Cuando se agrega la pareja {"uno": 2}
    Entonces la lista tiene 1 elemento almacenado

Escenario: Actualizar un elemento existente
    Dado una lista con los siguientes elementos
    | "clave" | "valor 1" |
    Cuando se agrega la pareja {"clave": "valor 2"}
    Cuando se busca la clave "clave"
    Entonces se obtiene el valor "valor 2"