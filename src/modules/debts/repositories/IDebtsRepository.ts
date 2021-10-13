import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';

import { ICreateDebtDTO } from '../dtos/ICreateDebtDTO';
import { IUpdateDebtDTO } from '../dtos/IUpdateDebtDTO';

interface IDebtsRepository {
  create(data: ICreateDebtDTO): Promise<Debt>;
  show(id: string): Promise<Debt>;
  list(): Promise<Array<Debt>>;
  update(data: IUpdateDebtDTO): Promise<Debt>;
  delete(id: string): Promise<void>;
}

export { IDebtsRepository };
