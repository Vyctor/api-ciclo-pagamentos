import { inject, injectable } from 'tsyringe';

import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

@injectable()
class ListAllCreditsUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(): Promise<Credit[]> {
    return this.creditsRepository.list();
  }
}

export { ListAllCreditsUseCase };
