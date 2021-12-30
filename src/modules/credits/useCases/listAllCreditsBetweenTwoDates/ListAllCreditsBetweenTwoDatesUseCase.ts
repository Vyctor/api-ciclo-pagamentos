import { inject, injectable } from 'tsyringe';

import { IListAllCreditsBetweenTwoDates } from '@modules/credits/dtos/IListAllCreditsBetweenTwoDates';
import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

@injectable()
class ListAllCreditsBetweenTwoDatesUseCase {
  constructor(
    @inject('CreditsRepository')
    private readonly creditsRepository: ICreditsRepository,
  ) {}

  public async execute({ start, end }: IListAllCreditsBetweenTwoDates): Promise<Credit[]> {
    return this.creditsRepository.listAllCreditsBetweenTwoDates(start, end);
  }
}

export { ListAllCreditsBetweenTwoDatesUseCase };
