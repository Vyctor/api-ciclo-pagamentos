import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';

class BillingCycle {
  public id: string;

  public name: string;

  public month: number;

  public year: number;

  public credits: Array<Credit>;

  public debits: Array<Debt>;
}

export { BillingCycle };
