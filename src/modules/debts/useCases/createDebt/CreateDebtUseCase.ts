import { inject, injectable } from 'tsyringe';

import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import RedisCache from '../../../../shared/cache/RedisCache';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateDebtUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute({ name, value }: ICreateDebtDTO): Promise<Debt> {
    if (value <= 0) {
      throw new AppError('Value must be greater or equal zero.');
    }
    await RedisCache.invalidate('api-ciclo-pagamentos-DEBTS_LIST');

    return this.debtsRepository.create({ name, value });
  }
}

export { CreateDebtUseCase };
