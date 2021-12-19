import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';

import { AppError } from '../../../../shared/errors/AppError';
import { Debt } from '../../infra/typeorm/entities/Debt';
import { FakeDebtsRepository } from '../../repositories/fakes/FakeDebtsRepository';
import { CreateDebtUseCase } from './CreateDebtUseCase';

let fakeDebtsRepository: FakeDebtsRepository;
let createDebtUseCase: CreateDebtUseCase;

describe('Create Debt', () => {
  beforeEach(() => {
    fakeDebtsRepository = new FakeDebtsRepository();
    createDebtUseCase = new CreateDebtUseCase(fakeDebtsRepository);
  });

  test('should be able to create a debt ', async () => {
    const debt: ICreateDebtDTO = {
      name: 'Payment',
      value: 3700,
    };

    const response = await createDebtUseCase.execute(debt);

    expect(response).toBeInstanceOf(Debt);
    expect(response).toHaveProperty('id');
  });

  test('should not be able to create a debt if value less than or equal to zero', async () => {
    expect(async () => {
      await createDebtUseCase.execute({
        name: 'Payment',
        value: -3700,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
