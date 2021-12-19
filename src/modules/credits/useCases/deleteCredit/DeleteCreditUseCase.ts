import { inject, injectable } from 'tsyringe';

import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

import RedisCache from '../../../../shared/cache/RedisCache';

@injectable()
class DeleteCreditUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await RedisCache.invalidate('api-ciclo-pagamentos-CREDITS_LIST');
    return this.creditsRepository.delete(id);
  }
}

export { DeleteCreditUseCase };
