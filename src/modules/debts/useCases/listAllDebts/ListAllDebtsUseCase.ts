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
    let debts = await this.cacheProvider.recover<Debt[]>('api-ciclo-pagamentos-DEBTS_LIST');

    if (!debts) {
      debts = await this.debtsRepository.list();

      await this.cacheProvider.save('api-ciclo-pagamentos-DEBTS_LIST', debts.length > 0 ? debts : Array<Debt>());
      return debts;
    }
    return debts;
  }
}

export { ListAllDebtsUseCase };
