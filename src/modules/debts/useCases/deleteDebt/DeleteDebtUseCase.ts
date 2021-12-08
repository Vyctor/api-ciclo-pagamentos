import { inject, injectable } from 'tsyringe';

import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

@injectable()
class DeleteDebtUseCase {
  constructor(
    @inject('DebtsRepository')
    private readonly debtsRepository: IDebtsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.debtsRepository.delete(id);
  }
}

export { DeleteDebtUseCase };
