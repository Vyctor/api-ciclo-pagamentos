import { inject, injectable } from 'tsyringe';

import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';
import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateCreditUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute({ name, value }: ICreateCreditDTO): Promise<Credit> {
    if (value <= 0) {
      throw new AppError('Value must be greater or equal zero.');
    }
    return this.creditsRepository.create({ name, value });
  }
}

export { CreateCreditUseCase };
