import { inject, injectable } from 'tsyringe';

import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import ICacheProvider from '../../../../shared/container/providers/CacheProvider/models/ICacheProvider';

@injectable()
class DeleteDebtUseCase {
  constructor(
    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.cacheProvider.invalidate('api-ciclo-pagamentos-DEBTS_LIST');

    return this.debtsRepository.delete(id);
  }
}

export { DeleteDebtUseCase };
