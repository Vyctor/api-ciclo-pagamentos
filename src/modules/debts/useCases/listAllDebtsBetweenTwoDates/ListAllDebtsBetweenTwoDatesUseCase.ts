import { inject, injectable } from 'tsyringe';

import { IListAllDebtsBetweenTwoDates } from '@modules/debts/dtos/IListAllDebtsBetweenTwoDates';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

@injectable()
class ListAllDebtsBetweenTwoDatesUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute({ start, end }: IListAllDebtsBetweenTwoDates): Promise<Debt[]> {
    return this.debtsRepository.listAllDebtsBetweenTwoDates(start, end);
  }
}

export { ListAllDebtsBetweenTwoDatesUseCase };
