import { inject, injectable } from 'tsyringe';

import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

import RedisCache from '../../../../shared/cache/RedisCache';

@injectable()
class ListAllCreditsUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute(): Promise<Credit[]> {
    let credits = await RedisCache.recover<Credit[]>('api-ciclo-pagamentos-CREDITS_LIST');

    if (!credits) {
      credits = await this.creditsRepository.list();
      await RedisCache.save('api-ciclo-pagamentos-CREDITS_LIST', credits);
      return credits;
    }

    return credits;
  }
}

export { ListAllCreditsUseCase };
