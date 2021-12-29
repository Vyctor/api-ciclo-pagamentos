import { ICreateCreditDTO } from '@modules/credits/dtos/ICreateCreditDTO';

import FakeCacheProvider from '../../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { Credit } from '../../infra/typeorm/entities/Credit';
import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from './CreateCreditUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let createCreditUseCase: CreateCreditUseCase;
let cacheProvider: FakeCacheProvider;

describe('Create Credit', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    cacheProvider = new FakeCacheProvider();
    createCreditUseCase = new CreateCreditUseCase(cacheProvider, fakeCreditsRepository);
  });

  test('should be able to create a credit ', async () => {
    const credit: ICreateCreditDTO = {
      name: 'Payment',
      value: 3700,
    };

    const response = await createCreditUseCase.execute(credit);

    expect(response).toBeInstanceOf(Credit);
  });

  test('should not be able to create a credit if value less than or equal to zero', async () => {
    expect(async () => {
      await createCreditUseCase.execute({
        name: 'Payment',
        value: -3700,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
