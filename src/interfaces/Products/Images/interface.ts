interface ProductImageItem {
  url: string;
  is_main?: boolean;
  display_order?: number;
}
 
interface productsImagesDatas {
  id_image?: string;
  id_product_fk: number;
  images: ProductImageItem[];         // array com metadados por imagem
  created_at?: Date | string;
  updated_at?: Date | string;
}
 
export { productsImagesDatas, ProductImageItem };