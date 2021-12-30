import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';

interface ICreditsResponse {
  total: number;
  credits: Credit[];
}
interface IDebtsReponse {
  total: number;
  debts: Debt[];
}

interface IListBillingCycle {
  credits: ICreditsResponse;
  debts: IDebtsReponse;
}

export { IListBillingCycle };
