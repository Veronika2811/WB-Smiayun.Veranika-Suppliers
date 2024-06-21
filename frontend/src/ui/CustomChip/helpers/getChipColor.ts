export const getChipColor = (value: string) => {
  switch (value) {
    case 'В пути':
      return {
        color: '#85ef89',
        backgroundColor: '#14532b',
      };
    case 'Задерживается':
      return {
        color: '#fdb172',
        backgroundColor: '#7c3d12',
      };
    default:
      return {};
  }
};
