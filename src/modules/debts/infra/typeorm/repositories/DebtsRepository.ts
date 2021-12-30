import { Between, getRepository, Repository } from 'typeorm';

import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';
import { IUpdateDebtDTO } from '@modules/debts/dtos/IUpdateDebtDTO';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import { Debt, DebtStatus } from '../entities/Debt';

class DebtsRepository implements IDebtsRepository {
  private repository: Repository<Debt>;

  constructor() {
    this.repository = getRepository(Debt);
  }

  async create({ name, value, date }: ICreateDebtDTO): Promise<Debt> {
    const debt = new Debt();

    Object.assign(debt, {
      name,
      status: DebtStatus.AGENDADO,
      value,
      date,
    });

    return this.repository.save(debt);
  }

  async show(id: string): Promise<Debt> {
    return this.repository.findOne(id);
  }

  async list(): Promise<Debt[]> {
    return this.repository.find();
  }

  async listAllDebtsBetweenTwoDates(start: Date, end: Date): Promise<Debt[]> {
    return this.repository.find({
      date: Between(start, end),
    });
  }

  async update({ id, name, status, value, date }: IUpdateDebtDTO): Promise<Debt> {
    await this.repository.update(id, { name, status, value, date });
    return this.repository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export { DebtsRepository };
