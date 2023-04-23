/*Desafio 1

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1. Preço do combustível
2. Gasto médio de combustível do carro por km
3. Distância em km da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/
const precoCombustivel = 5.79;
const kmPorLitros = 11.5;
const distanciaCarroKm = 100;

const gastoLitrosConsumidos = distanciaCarroKm / kmPorLitros;
const valorConsumidoTotal = precoCombustivel * gastoLitrosConsumidos;

console .log ("Litros consumidos: " + gastoLitrosConsumidos);
console .log ("Valor gasto de combustível: " + valorConsumidoTotal.toFixed(2)); // o .toFixed(2) vai converter o valor para texto e inserir o valor de casas após a vírgula a considerar. 