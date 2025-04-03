import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../services/productService';

export const useProducts = () => {
  return useQuery(['products'], getAllProducts);
};
