import { redirect } from 'next/navigation';

export default function Products() {
  redirect('/shop');
  
  return null; 
}
