import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';
import { IUpdateDebtDTO } from '@modules/debts/dtos/IUpdateDebtDTO';
import { Debt, DebtStatus } from '@modules/debts/infra/typeorm/entities/Debt';

import { AppError } from '../../../../shared/errors/AppError';
import { IDebtsRepository } from '../IDebtsRepository';

class FakeDebtsRepository implements IDebtsRepository {
  private debts: Array<Debt> = [];

  async create({ name, value }: ICreateDebtDTO): Promise<Debt> {
    const newDebt = new Debt();

    Object.assign(newDebt, {
      name,
      value,
      status: DebtStatus.AGENDADO,
    });

    this.debts.push(newDebt);

    return newDebt;
  }

  async show(id: string): Promise<Debt> {
    return this.debts.find((debt) => debt.id === id);
  }

  async list(): Promise<Debt[]> {
    return this.debts;
  }

  async update({ id, name, value, status }: IUpdateDebtDTO): Promise<Debt> {
    const debtIndex = this.debts.findIndex((debt) => debt.id === id);

    if (!debtIndex) {
      throw new AppError('Debt does not exists');
    }

    Object.assign(this.debts[debtIndex], {
      name,
      value,
      status,
    });

    return this.debts[debtIndex];
  }

  async delete(id: string): Promise<void> {
    this.debts = this.debts.filter((debt) => debt.id !== id);
  }
}

export { FakeDebtsRepository };
