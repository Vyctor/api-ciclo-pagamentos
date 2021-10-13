import { inject } from 'tsyringe';

import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';
import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

class CreateCreditUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute({ name, value }: ICreateCreditDTO): Promise<Credit> {
    return this.creditsRepository.create({ name, value });
  }
}

export { CreateCreditUseCase };
