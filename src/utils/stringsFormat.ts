export const formatPriceToBRL = (price: string) => {
    const numberPrice = parseFloat(price);
  
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(numberPrice);
  };
  