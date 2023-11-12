export const formatPriceToBRL = (price: any) => {
    const numberPrice = parseFloat(price);
  
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(numberPrice);
  };
  