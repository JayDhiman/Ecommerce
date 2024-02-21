import React from 'react';
import Logo from '../Assets/Logo.jpeg'


const Navbar = ({
    
  
    button
}) => {
    
    
    
    
    return (
    <>
    <header className=''>
            <nav className=" bg-transparent py-3 z-30 ">
                <div className=" justify-between flex items-center space-x-6">
                    <div className="  mx-3 rounded-full flex ">
                      <div>
                         <img src={Logo} alt="" width={50} className=' ml-4 mt-2 bg-stone-600 rounded-full bg-transparent'  />
                        </div>
                        <div className='mt-5 text-black'>
                        <h1 className='uppercase font-secondary'>CartCarft</h1>
                        </div>
                        
                    </div>
                    <ul className="md:flex items-center justify-end text-end space-x-6 hidden">
                            

                          
                        <li className="text-lg flex space-x-3 font-extralight ">
                            login
                        </li>
                        <li className=" flex space-x-3 font-extralight">
                            <div className=''>
                               {button.map((val,index)=>(
                                <span key={index}  className='mr-2 p-3'>{val}</span>
                               ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>
        </>
    );
}

export default Navbar;