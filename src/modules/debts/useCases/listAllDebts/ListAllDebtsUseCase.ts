import { inject, injectable } from 'tsyringe';

import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

@injectable()
class ListAllDebtsUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(): Promise<Debt[]> {
    return this.debtsRepository.list();
  }
}

export { ListAllDebtsUseCase };
