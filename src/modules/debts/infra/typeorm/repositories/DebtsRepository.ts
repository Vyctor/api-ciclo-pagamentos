import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';
import { IUpdateDebtDTO } from '@modules/debts/dtos/IUpdateDebtDTO';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

import { Debt } from '../entities/Debt';

class DebtsRepository implements IDebtsRepository {
  private repository: Repository<Debt>;

  constructor() {
    this.repository = getRepository(Debt);
  }

  async create({ name, status, value }: ICreateDebtDTO): Promise<Debt> {
    const debt = new Debt();

    Object.assign(debt, {
      name,
      status,
      value,
    });

    return this.repository.save(debt);
  }

  async show(id: string): Promise<Debt> {
    return this.repository.findOne(id);
  }

  async list(): Promise<Debt[]> {
    return this.repository.find();
  }

  async update({ id, name, status, value }: IUpdateDebtDTO): Promise<Debt> {
    await this.repository.update(id, { name, status, value });

    return this.repository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export { DebtsRepository };
