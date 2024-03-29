import React from 'react'
import toast from 'react-hot-toast';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const Home = () => {
    const productList = [
        {
            name:"Mac Book", price:"83000",imgSrc:img1,id:"djcckcjdcnjcns"
        },
        {
            name:"Pro Book", price:"81000",imgSrc:img2,id:"cdjdc"
        },
        {
            name:"Vivo Book", price:"80000",imgSrc:img1,id:"djcckcjdcnjcns"
        },
        {
            name:"Note Book", price:"84000",imgSrc:img2,id:"cdjdc"
        },
        {
            name:"Realme Book", price:"85000",imgSrc:img2,id:"cdjdc"
        },
    ]


    const addToCartHandler =(options)=>{
        toast.success("Added to Cart");
    };
  return (
    <div className='home'>
        {
            productList.map((i)=>(
            <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}/>
            ))
        }
    </div>
  )
}

const ProductCard = ({name,id,price,handler,imgSrc}) =>(
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
    </div>
)

export default Home