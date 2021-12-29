import { inject, injectable } from 'tsyringe';

import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';
import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateCreditUseCase {
  constructor(
    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute({ name, value, date }: ICreateCreditDTO): Promise<Credit> {
    if (value <= 0) {
      throw new AppError('Value must be greater or equal zero.');
    }

    await this.cacheProvider.invalidate('api-ciclo-pagamentos-CREDITS_LIST');
    return this.creditsRepository.create({ name, value, date });
  }
}

export { CreateCreditUseCase };
