import { inject, injectable } from 'tsyringe';

import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

@injectable()
class ListCreditByIdUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(id: string): Promise<Credit> {
    return this.creditsRepository.show(id);
  }
}

export { ListCreditByIdUseCase };
