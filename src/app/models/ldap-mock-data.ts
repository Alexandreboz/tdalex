import { Component } from "@angular/core";
import { UserLdap } from "./user-ldap";

export const LDAP_USERS:UserLdap[] = [
    {
    login: 'test.v1',
    nom: 'V1',
    prenom: 'test',
    nomComplet: 'V1 test',
    motDePasse: null,
    mail: 'mail.v1@Expansion.fr',
    role: 'ROLE_USER',
    employeNumero:1234 ,
    employeNiveau: 120,
    dateEmbauche: '2020-01-01',
    publisherId: 1,
    active: true,
    },
    {
    login: 'test.v2',
    nom: 'V2',
    prenom: 'test',
    nomComplet: 'V2 test',
    motDePasse: null,
    mail: 'mail.v2@Expansion.fr',
    role: 'ROLE_USER',
    employeNumero:2234 ,
    employeNiveau: 220,
    dateEmbauche: '2020-02-02',
    publisherId: 2,
    active: true,
    }

    
    
]


