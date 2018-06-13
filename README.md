# Соглашение

При нажатии на кнопку **Search** или **Calculate** отрпавляется json серверу
```js
{
    type: "search" | "calc"
    carrier: "Internal",
    date: date.format("DD-MM-YYYY"),
    optType: "CostOpt" | "ElapsedTimeOpt" | "ComplexOpt" 
    optAlg: "Genetic" | "Ants" | "Pareto" | "VNS"
}
```

Если есть такие данные, то сервер присылает их в виде следующего **JSON**'a

```js
{
    routeNumber: number,
    date: string,
    numberOfPoints: number,
    status: undefine,
    length: number,
    time: "string",
    cost: number
}
```

# TODO 
* Что делает кнопка **Calculate** ?
* Как работает кнопка **Add*** ?
* Как работает кнопка **Approve** ?
* Как работает кнопка **Export** ?





