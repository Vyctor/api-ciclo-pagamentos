import { inject, injectable } from 'tsyringe';

import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import ICacheProvider from '../../../../shared/container/providers/CacheProvider/models/ICacheProvider';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateDebtUseCase {
  constructor(
    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute({ name, value }: ICreateDebtDTO): Promise<Debt> {
    if (value <= 0) {
      throw new AppError('Value must be greater or equal zero.');
    }

    await this.cacheProvider.invalidate('api-ciclo-pagamentos-DEBTS_LIST');

    return this.debtsRepository.create({ name, value });
  }
}

export { CreateDebtUseCase };
