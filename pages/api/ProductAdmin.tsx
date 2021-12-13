import { useState } from 'react';

interface EnableModal {
  Logeado:boolean;
}


export type CartItemType = {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  stock: number;
  photo_file_name: string;
  amount: number;
}



function ProductAdmin(props: { /* Logeado: EnableModal */ product:CartItemType}) {
  /* const [ModalEditActive, setModalEditActive] = useState<boolean>(false);
  const {Logeado} = props 
   */

  const {product} = props 
  return {
    /* isModalProducts:[ModalEditActive,setModalEditActive], */
  };
}

export default ProductAdmin;
