import { inject, injectable } from 'tsyringe';

import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

@injectable()
class ListDebtByIdUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(id: string): Promise<Debt> {
    return this.debtsRepository.show(id);
  }
}

export { ListDebtByIdUseCase };
