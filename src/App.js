import './App.css';
import { useState } from 'react';
import MockData from './MOCK_DATA.json';
import waves from './waves.svg';

function App() {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ showBtn, setShowBtn ] = useState(false);

  // const handleBtnShowing = () => {
  //   if(searchTerm !== "") {
  //     setShowBtn(true);
  //   } else {
  //     setShowBtn(false);
  //   }
  // }  

  return (
    <div className="App">
      <h1 className='title'>Search Filter</h1>
      <input 
      autocomplete="off"
      id="search"
      className='search-bar'
      type='text' 
      placeholder='what are u looking for?' 
      required 
      value={searchTerm} 
      onChange={(e) => {
        setSearchTerm(e.target.value); 
        setShowBtn(true);
      }}
      />
      <div className='search-items'>
        {MockData.filter((person) => ({
        if(searchTerm === "") {
          return null;
        } else if (person.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return person;
        }
        })).map((person, key) => {
          return (
            <div 
            className='search-item' 
            key={key}
            >
              {`${person.id}. ${person.first_name} ${person.last_name}`}
            </div>
          )
        })}
        {/*how to add scrolling from bottom to top?? this linking doesn't work*/}
        {showBtn ? <button className='up-btn' href="#search">up</button> : null}
      </div>
    </div>
  );
}

export default App;
