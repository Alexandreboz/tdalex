 export interface UserLdap {
  login: string;
  nom: string;
  prenom: string;
  nomComplet: string;
  motDePasse: string | null;
  mail: string;
  role: string;
  employeNumber: number;
  employeNiveau: number;
  dateEmbauche: string;
  publisherId: number;
  active: boolean;
}
