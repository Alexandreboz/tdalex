import {UserLdap} from "./user-ldap";
export const LDAP_USERS: UserLdap[] = [
  {
    login:'test.v1',
    nom: 'V1',
    prenom: 'Test',
    nomComplet: 'V1 Test',
    motDePasse: null,
    mail: 'testv1@epsi.fr',
    role: 'ROLE_USER',
    employeNumber: 1234,
    employeNiveau: 120,
    dateEmbauche: '2020-01-01',
    publisherId: 1,
    active: true,
  },
  {
    login:'test.v2',
    nom: 'V2',
    prenom: 'Test',
    nomComplet: 'V2 Test',
    motDePasse: null,
    mail: 'testv2@epsi.fr',
    role: 'ROLE_USER',
    employeNumber: 2234,
    employeNiveau: 220,
    dateEmbauche: '2020-02-02',
    publisherId: 2,
    active: true,
  }
];
