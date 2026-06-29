import { FindByUserId } from '../users/find-user-by-id.output';

type CompanyLoginOutput = {
  id: string;
  cnpj: string;
  stateRegistration: string;
  fantasyName: string;
  socialReazon: string;
}

export type LoginOutput = {
  user: FindByUserId;
  company: CompanyLoginOutput
  token: string;
};
