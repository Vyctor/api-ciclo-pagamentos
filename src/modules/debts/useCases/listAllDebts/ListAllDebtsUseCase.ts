import { inject, injectable } from 'tsyringe';

import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import ICacheProvider from '../../../../shared/container/providers/CacheProvider/models/ICacheProvider';

@injectable()
class ListAllDebtsUseCase {
  constructor(
    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(): Promise<Debt[]> {
    const debts = await this.cacheProvider.recover<Debt[]>('api-ciclo-pagamentos-CREDITS_LIST');

    if (!debts) {
      const debts = this.debtsRepository.list();
      await this.cacheProvider.save('api-ciclo-pagamentos-DEBTS_LIST', debts);
      return debts;
    }
    return debts;
  }
}

export { ListAllDebtsUseCase };
