import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';
import { IUpdateCreditDTO } from '@modules/credits/dtos/IUpdateCreditDTO';
import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';

@injectable()
class CreditsRepository implements ICreditsRepository {
  private repository: Repository<Credit>;

  constructor() {
    this.repository = getRepository(Credit);
  }

  async create({ name, value }: ICreateCreditDTO): Promise<Credit> {
    const credit = new Credit();
    Object.assign(credit, {
      name,
      value,
    });

    return this.repository.save(credit);
  }

  async show(id: string): Promise<Credit> {
    return this.repository.findOne(id);
  }

  async list(): Promise<Credit[]> {
    return this.repository.find();
  }

  async update({ id, name, value }: IUpdateCreditDTO): Promise<Credit> {
    await this.repository.update(
      { id },
      {
        name,
        value,
      },
    );

    return this.repository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CreditsRepository };