import { inject, injectable } from 'tsyringe';

import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

@injectable()
class CreateDebtUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute({ name, value }: ICreateDebtDTO): Promise<Debt> {
    return this.debtsRepository.create({ name, value });
  }
}

export { CreateDebtUseCase };
