import { inject, injectable } from 'tsyringe';

import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import RedisCache from '../../../../shared/cache/RedisCache';

@injectable()
class ListAllDebtsUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(): Promise<Debt[]> {
    const debts = await RedisCache.recover<Debt[]>('api-ciclo-pagamentos-CREDITS_LIST');

    if (!debts) {
      const debts = this.debtsRepository.list();
      await RedisCache.save('api-ciclo-pagamentos-DEBTS_LIST', debts);
      return debts;
    }
    return debts;
  }
}

export { ListAllDebtsUseCase };
