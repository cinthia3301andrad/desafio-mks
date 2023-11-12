
import * as S from './styles';
import { useCart } from '@/context/CartContext';

export function MenuRight() {
  const { items } = useCart()


  return (
    <S.ContainerMenuRight>
  
    </S.ContainerMenuRight>
  );
}
