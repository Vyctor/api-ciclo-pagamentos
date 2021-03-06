import { inject, injectable } from 'tsyringe';

import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

@injectable()
class ListAllCreditsUseCase {
  constructor(
    @inject('CacheProvider')
    private readonly cacheProvider: ICacheProvider,
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(): Promise<Credit[]> {
    let credits = await this.cacheProvider.recover<Credit[]>('api-ciclo-pagamentos-CREDITS_LIST');

    if (!credits) {
      credits = await this.creditsRepository.list();
      await this.cacheProvider.save('api-ciclo-pagamentos-CREDITS_LIST', credits.length > 0 ? credits : Array<Credit>());
      return credits;
    }
    return credits;
  }
}

export { ListAllCreditsUseCase };
