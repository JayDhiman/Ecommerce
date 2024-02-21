import React,{useEffect} from 'react'
import Carousel from '../components/Carousel'


import { STATUS, fetchproducts } from '../Store/Productslice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  
  if (status === STATUS.LOADING) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <div className='w-auto h-auto'>
  
  
      {/* carousel */}
      <section className='w-auto h-auto  '>
        <Carousel/>

      </section>
    

      {/* catogory */}
      <div className='w-full h-fit container mx-auto bg-gray-50 py-2 '>
        {/* catogry-items */}
      <div className=''>
        <ul className='flex items-center justify-center flex-wrap gap-3 '>
          <li>Grocery</li>
          <li>Mobile</li>
          <li>Electronics</li>
          <li>Home & Furniture</li>
          <li>Applicance</li>
        </ul>
      </div>
      {/* catogry-img */}
      <div className=''>
        <ul className='flex items-center justify-center flex-wrap gap-3'>
         
        </ul>
      </div>
      </div>


      {/* Products */}

      <div className=" container mx-auto px-4 py-8 flex">
      <div className=" flex items-center justify-center gap-6 flex-wrap  overflow-hidden ">
        {data.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md h-[320px] w-[300px] ">
            <Link to={`/product/${product.id}`} className='block'>
            <div className='w-[200px] mx-auto flex items-center justify-center hover:scale-110 transition duration-300 '>
            <img src={product.image} alt={product.title} className="bg-cover bg-center  max-h-[180px]  pt-3" />
            </div>

            <div className="">
              <div>
              <h3 className='font-bold text-center m-1 pt-2 uppercase '>{product.category}</h3>
              </div>
              <div className='overflow-auto pt-3 w-22'>
              <h2 className="text-base font-light text-gray-800 whitespace-normal max-w-xs text-center p-2 text-balance font-primary">{product.title}</h2>

              </div>
              
            </div>
        </Link>
          </div>
        ))}
      </div>
    </div>
</div>
    </>
  )
}

export default Home