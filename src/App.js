import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);
  
  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels)
  }
  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  return(
    <div>
      <div className='container'>
        <h1>Нижний Новгород Топ {hotels.length} отелей</h1>
      </div>
      {hotels.map((item => {
        const {id, hotelName, description, image, source, showMore} = item;
        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>
            <div className='container'>
              <p className='descr'>{showMore ? description : description.substring(0, 150) + "...."}
              <button onClick={() => showTextClick(item)}>{showMore ? "Свернуть описание" : "Узнать больше"}</button>
              </p>
            </div>
            <div className='container'>
              <img src={image} width="500px" alt='Hotel'/>
            </div>
            <div className='container'>
              <p>источник: {source}</p>
            </div>
            <div className='container'>
              <button className='btn' onClick={() => removeHotel(id)}>Удалить</button>
            </div>
          </div>
        )
      })) }
    </div>
  )
}

export default App;
