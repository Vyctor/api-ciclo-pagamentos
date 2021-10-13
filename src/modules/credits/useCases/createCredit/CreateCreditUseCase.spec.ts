import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';

import { Credit } from '../../infra/typeorm/entities/Credit';
import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from './CreateCreditUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let createCreditUseCase: CreateCreditUseCase;

describe('Create Credit', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    createCreditUseCase = new CreateCreditUseCase(fakeCreditsRepository);
  });

  test('should be able to create a credit ', async () => {
    const credit: ICreateCreditDTO = {
      name: 'Payment',
      value: 3700,
    };

    const response = await createCreditUseCase.execute(credit);

    expect(response).toBeInstanceOf(Credit);
  });
});
