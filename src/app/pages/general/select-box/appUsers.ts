export interface AppUsers {
  id: number;
  username: string;
  name: string;
  operation: string;
  gain: string;
  email: string;
  carros: [];
}

export const appUsers = [
  {
    id: 1,
    username: 'jperez',
    name: 'Juan Pérez',
    operation: '$1,100',
    gain: '$1.50',
    email: 'jperez@gmail.com',
    carros: [
      {
        marca: 'Ferrari',
        modelo: 1234,
        color: 'negro',
      },
      {
        marca: 'TEST',
        modelo: 1234,
        color: 'negro',
      },
    ],
  },
  {
    id: 2,
    username: 'wcastillo',
    name: 'William Castillo',
    operation: '$2,200',
    gain: '$2.50',
    email: 'wcastilloz@gmail.com',
    carros: [
      {
        marca: 'Toyota',
        modelo: 1994,
        color: 'negro',
      },
    ],
  },
  {
    id: 3,
    username: 'pmendieta',
    name: 'Pepita Mendieta',
    operation: '$3,300',
    gain: '$3.50',
    email: 'pmendietaz@gmail.com',
    carros: [
      {
        marca: 'Ford',
        modelo: 1954,
        color: 'negro',
      },
      {
        marca: 'Toyota',
        modelo: 1994,
        color: 'azul',
      },
      {
        marca: 'TEST',
        modelo: 1998,
        color: 'amarillo',
      },
    ],
  },
];
