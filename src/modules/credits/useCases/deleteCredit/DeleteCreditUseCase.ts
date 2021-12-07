import { inject, injectable } from 'tsyringe';

import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

@injectable()
class DeleteCreditUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.creditsRepository.delete(id);
  }
}

export { DeleteCreditUseCase };
