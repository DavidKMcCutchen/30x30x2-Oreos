export interface Oreo {
  id: string;
  title: string;
  description: string;
  deliciousness: string;
  seasonal: boolean
};

export const emptyOreo = {
  id: '',
  title: '',
  description: '',
  deliciousness: '',
  seasonal: false
};