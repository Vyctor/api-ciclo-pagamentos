import { inject, injectable } from 'tsyringe';

import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

@injectable()
class DeleteCreditUseCase {
  constructor(
    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.cacheProvider.invalidate('api-ciclo-pagamentos-CREDITS_LIST');
    return this.creditsRepository.delete(id);
  }
}

export { DeleteCreditUseCase };
