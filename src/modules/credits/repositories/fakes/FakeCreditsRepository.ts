import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';
import { IUpdateCreditDTO } from '@modules/credits/dtos/IUpdateCreditDTO';
import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';

import { AppError } from '../../../../shared/errors/AppError';
import { ICreditsRepository } from '../ICreditsRepository';

class FakeCreditsRepository implements ICreditsRepository {
  public credits: Array<Credit> = [];

  async create({ name, value }: ICreateCreditDTO): Promise<Credit> {
    const newCredit = new Credit();

    Object.assign(newCredit, {
      name,
      value,
    });

    this.credits.push(newCredit);

    return newCredit;
  }

  async show(id: string): Promise<Credit> {
    return this.credits.find((credit) => credit.id === id);
  }

  async list(): Promise<Credit[]> {
    return this.credits;
  }

  async update({ id, name, value }: IUpdateCreditDTO): Promise<Credit> {
    const creditIndex = this.credits.findIndex((credit) => credit.id === id);

    if (!creditIndex) {
      throw new AppError('Credit not found!');
    }

    Object.assign(this.credits[creditIndex], {
      name,
      value,
    });

    return this.credits[creditIndex];
  }

  async delete(id: string): Promise<void> {
    this.credits = this.credits.filter((credit) => credit.id !== id);
  }
}

export { FakeCreditsRepository };
