import { isWithinInterval } from 'date-fns';

import { AppError } from '../../../../shared/errors/AppError';
import { ICreateCreditDTO } from '../../dtos/ICreateCreditDTO';
import { IUpdateCreditDTO } from '../../dtos/IUpdateCreditDTO';
import { Credit } from '../../infra/typeorm/entities/Credit';
import { ICreditsRepository } from '../ICreditsRepository';

class FakeCreditsRepository implements ICreditsRepository {
  private credits: Array<Credit> = [];

  async create({ name, value, date }: ICreateCreditDTO): Promise<Credit> {
    const newCredit = new Credit();

    Object.assign(newCredit, {
      name,
      value,
      date,
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

  async listAllCreditsBetweenTwoDates(start: Date, end: Date): Promise<Credit[]> {
    return this.credits.filter((debt) => {
      return isWithinInterval(debt.date, {
        start,
        end,
      });
    });
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
