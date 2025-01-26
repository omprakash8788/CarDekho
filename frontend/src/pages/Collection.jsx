import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products}=useContext(ShopContext)
  // console.log(products);
  const [showFilter, setShowFilter]=useState(false);
  const [filterProducts, setFilterProducts]=useState([]);
  console.log(filterProducts);
  const [category, setCategory]=useState([]);
  const [subCategory, setSubCategory]=useState([]);

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !=e.target.value))
    }
    else{
      setCategory(prev=>[...prev, e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !=e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev, e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(category.length>0){
      productsCopy=productsCopy.filter((item)=>category.includes(item.category))
    };
    setFilterProducts(productsCopy)
  }

  useEffect(()=>{
    applyFilter();

  },[category, subCategory])

  useEffect(()=>{
    setFilterProducts(products)
  },[])
  

  // useEffect(()=>{
  //   console.log(category);
    
  // },[category])

  // useEffect(()=>{
  //   console.log(subCategory);
    
  // },[subCategory])
  

  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" :""}`} src={assets.dropdown_icon} alt="" /></p>
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "":"hidden"} sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" value={"Compact car"} className='w-3' onChange={toggleCategory} />
              Compact car
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={"Passenger car"} className='w-3' onChange={toggleCategory}  />
              Passenger car
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={"Roofline"} className='w-3' onChange={toggleCategory}  />
              Rofline
            </p>

           </div>
         </div>

         {/*  */}

         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "":"hidden"} sm:block`}>
           <p className='mb-3 text-sm font-medium'>TYPE</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" value={"sports cars"} className='w-3' onChange={toggleSubCategory} />
              sports cars
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={"SUVs"} className='w-3' onChange={toggleSubCategory} />
              SUVs
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={"Hatchbacks"} className='w-3' onChange={toggleSubCategory} />
              Hatchbacks
            </p>

           </div>
         </div>

      

         
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={"Collections"}/>
           <select>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>

           </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Collection