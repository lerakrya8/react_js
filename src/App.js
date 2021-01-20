import React, { useState } from 'react'
import Select from './Select'

const towns = ["Москва", "Тамбов", "Новосибирск", "Екатеринбург", "Казань",
"Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону", "Уфа",
"Красноярск", "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов",
"Тюмень", "Тольятти", "Ижевск", "Барнаул", "Ульяновск", "Иркутск",
"Хабаровск", "Ярославль", "Владивосток", "Махачкала", "Томск", "Оренбург",
"Кемерово", "Рязань", "Набережные Челны", "Астрахань", "Пенза"];

function App() {
  const [filters, setFilters] = useState({release_town: ""});

  const onChange = event => {
    const {name, value} = event.target;
    setFilters({
      [name]: value
    });
  };

  return (
  <div className="App">
    <Select
      release_town={filters.release_town}
      onChange={onChange}
      towns={towns}
    />
    <p>Город: {filters.release_town}</p>
  </div>
  )
}

export default App;
