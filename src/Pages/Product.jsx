import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { STATUS, fetchproducts } from '../Store/Productslice';
import { useDispatch, useSelector } from 'react-redux';


const Product = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  
  if (status === STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  
    const product = data.find((product) => product.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>;
    }
  return (
    <>
    {/* to get single Product */}

      {/* <div className='container mx-auto '>
      <img src={product.image} alt="" className='max-w-[200px]' />
      </div>
      <h2 > {product.title}</h2>
      <p>{product.price}</p>
    </div> */}
    
      <div className='w-full h-full bg-slate-50'>
        {/* container */}
      <div className='flex items-center justify-center '>
        {/* image section */}
          <div className='h-fit max-w-[50%]'>
          <img src={product.image} alt="" className='' />
          </div>
            {/* description */}
          <div className=''>
            {/* title */}
            <div className=''>
            <h1>
                {product.title}
              </h1>
              
            </div>
          </div>
      </div>
      </div>




   </>

   
   
  )
}

export default Product