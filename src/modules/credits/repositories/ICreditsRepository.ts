import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';

import { ICreateCreditDTO } from '../dtos/ICreateCreditDTO';
import { IUpdateCreditDTO } from '../dtos/IUpdateCreditDTO';

interface ICreditsRepository {
  create(data: ICreateCreditDTO): Promise<Credit>;
  show(id: string): Promise<Credit>;
  list(): Promise<Array<Credit>>;
  update(data: IUpdateCreditDTO): Promise<Credit>;
  delete(id: string): Promise<void>;
}

export { ICreditsRepository };
