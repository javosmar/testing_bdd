# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista

Escenario: Agregar un elemento a una lista vacía
    Dado una lista vacía
    Cuando se agrega la pareja {"clave": "valor"}
    Entonces la lista tiene 1 elemento almacenado

Escenario: Agregar un elemento a una lista con elementos
    Dado una lista con los siguientes elementos
    | "uno" | 1 |
    Cuando se agrega la pareja {"dos": 2}
    Entonces la lista tiene 2 elementos almacenados

Escenario: Eliminar un elemento de una lista con elementos
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    | "dos"  | 2 |
    | "tres" | 3 |
    Cuando se elimina la clave "dos"
    Entonces la lista tiene 2 elementos almacenados

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