import { ICreateDebtDTO } from '@modules/debts/dtos/ICreateDebtDTO';

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
});
