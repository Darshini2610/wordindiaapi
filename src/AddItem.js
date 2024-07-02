import React,{useState} from 'react';

function AddItem({onSubmit}) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [shipping, setShipping] = useState("");
    const [count, setcount] = useState(21)
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
      };
    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({
          key: count,
          item: name,
          image_url: 'https://placehold.co/400x400.png',
        price: price,
        shipping_method: shipping});
      setcount(count+1);
    };
  
    return (
        <div className='m-5' id='additem'>
            <h4 className='font-semibold p-2'>Add Item</h4>
        <form className="inputform space-y-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input 
            type="text" 
            placeholder="Item Name" 
            value={name} 
            onChange={handleNameChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input 
            type="number" 
            placeholder="Price" 
            value={price} 
            onChange={handlePriceChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Method</label>
          <input 
            type="text" 
            placeholder="Shipping Method" 
            value={shipping} 
            onChange={handleShippingChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
        </div>
        <button 
          type="submit" 
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      </div>
    );
}
export default AddItem;
