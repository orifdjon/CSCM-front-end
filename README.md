# Соглашение

При нажатии на кнопку **Search** происходит следующее:
 1. Отрпавляется **GET** запрос c Клиент -> Сервер
   Это праметры,которые передаются через URL, т.е. это не является json. 
```json
{
    "date(dateStart)": "date.format('YYYY-MM-DD)",
    "carrier(region)": "Internal = 43",
    "optType(routingType)": "CostOpt = 1" | "ElapsedTimeOpt = 2" | "ComplexOpt = 3" 
    "optAlg": "Genetic = 1" | "Ants = 2" | "Pareto = 3" | "VNS = 4"
}
```
2. Отправляется **POST** Сервер -> Клинет
```json
{
    "n(rout number)": -999,
    "region(don't use)": 43,
    "fdate('YYYY-MM-DD')": "2018-04-26T21:00:00.000+0000",
    "changed(don't use)": false, curCurrier
    "points": 1,
    "length": 0,
    "time": 0,
    "cost": 0,
    "costCurr": "NOT_DEFINED",
    "status": "CREATED",
    "resultFlag": 0,
    "editable": true,
    "approveable": true
}    
```

# TODO 
* Что делает кнопка **Calculate** ?
* Как работает кнопка **Add*** ? 
* Как работает кнопка **Approve** ?
* Как работает кнопка **Export** ?
* Как добавлять точки ?




