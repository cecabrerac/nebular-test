export interface AppUsers {
  id: number;
  username: string;
  name: string;
  operation: string;
  gain: string;
}

export const appUsers = [
  {
    id: 1,
    username: 'jperez',
    name: 'Juan Pérez',
    operation: '$1,100',
    gain: '$1.50',
  },
  {
    id: 2,
    username: 'wcastiblanco',
    name: 'William Castiblanco',
    operation: '$2,200',
    gain: '$2.50',
  },
  {
    id: 3,
    username: 'pMendieta',
    name: 'Pepita Mendieta',
    operation: '$3,300',
    gain: '$3.50',
  },
];
