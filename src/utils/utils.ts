import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  return useMediaQuery({ maxWidth: 768 });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};