"use client";

import { EditModal } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { CreateModal, Modal } from "@/components/ui/CreateModal";
import { BACKEND_ENDPOINT} from "@/constants/constant";
import { useEffect, useState } from "react";

export default function Home() {

const [products, setProducts] = useState([]);



const fetchProducts = async () => {
  try {
    const response = await fetch(`${BACKEND_ENDPOINT}/products`);
    const responseData = await response.json();
    setProducts(responseData?.products);
  } catch (error) {
console.log(error);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

console.log(products);

const handleOnSubmit = async (event) => {
  event.preventDefault();

  const userData = {
    name: event.target.name.value,
    password: event.target.password.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  const response = await fetch(BACKEND_ENDPOINT, options);
  const data = await response.json();
}




  return (
    <div className="w-full flex justify-center p-6">
      <div className="max-w-[1200px]">
        <div className="flex justify-end">
             
        <CreateModal />
        
        </div>
        <div className="flex gap-5 flex-wrap justify-between mt-6">
           {products?.map((product) => {
            return <Card key={product?.id} product={product}/> 
           })}
          
          
        </div>
       
      </div>
    </div>
  );
}
