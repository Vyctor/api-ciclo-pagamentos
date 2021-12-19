import { inject, injectable } from 'tsyringe';

import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import RedisCache from '../../../../shared/cache/RedisCache';

@injectable()
class DeleteDebtUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await RedisCache.invalidate('api-ciclo-pagamentos-DEBTS_LIST');

    return this.debtsRepository.delete(id);
  }
}

export { DeleteDebtUseCase };
