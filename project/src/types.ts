export interface Challenge {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  starterCode: string;
  example: string;
}