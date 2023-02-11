# Project create countries Data and Weather.

## Technology:

1. React TS
2. Store: Redux Tool Kit

## Function vs Data

1. Display all Countries data by fetching data from

```js
BASE_COUNTRIES_GETALL = "https://restcountries.com/v3.1/all";
```

2. Display Weather data each country from

```js
BASE_URL_WEATHER = "https://openweathermap.org/";
```

3. Store user Favorite Countries. 


## Router Set Up:

```mermaid
graph LR;
    Template-->Country
    Template-->Favorite
    Country-->Countries_Details

```

## Store Set Up:

```mermaid
stateDiagram
    [*] --> Store_Configured
    Store_Configured --> Root_State
    Store_Configured --> App_Dispatch
    Root_State --> Countries_Slicer_State
    Root_State --> Favorite_Slicer_State
    App_Dispatch --> App_Thunk

```

