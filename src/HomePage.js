import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import AddItem from './AddItem';

function HomePage() {

    const [Items, setItems] = useState(null);

    useEffect(() => {

        axios
        .get(`https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a`)
        .then((response) => {
            setItems(response.data);
            setFilterList(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(Items)

    const additem = (item) => {
        const newItems = [item, ...Items];
        setFilterList(newItems);
    }

    const [filterList, setFilterList] = useState(Items);
    const handleSearch = (event) => {

        if (event.target.value === "") {
        setFilterList(Items);
        return;
        }
        const filteredValues = Items.filter(
            (item) =>
                item.item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
            );
            setFilterList(filteredValues);

            console.log(filterList)
        
    };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" id='home'>
      <AddItem onSubmit={additem}/>

      <input 
                className='w-80 h-10 rounded-lg bg-pretty ml-5 pl-2 border-black' 
                placeholder="Search"
                id="search"
                onChange={handleSearch}
            >
        </input>

    {filterList ? 
        (<div>
            {filterList.map((item) => (
                <div className="flex items-center p-5 m-5 bg-white rounded-lg shadow-md">
                    <img src={item.image_url} alt="Item Image" className='h-11'/>
                    <div class="ml-4">
                        <div className='font-bold'>{item.item}</div>
                        <div className="flex justify-between gap-10">
                            <div className=""><span className='text-gray-500 text-xs'>MRP: Rs.</span> {item?.price}</div>
                            <div>
                                {item.shipping_method}
                            </div>
                    </div>
                
    
                    </div>
                </div>

               
                
            ))}
        </div>)
        :
        null
    } 
    

      {/* Footer */}
      <footer className=" p-4 text-center">
        <button className="rounded-full" ></button>
      </footer>
    </div>
  );
}

export default HomePage;
