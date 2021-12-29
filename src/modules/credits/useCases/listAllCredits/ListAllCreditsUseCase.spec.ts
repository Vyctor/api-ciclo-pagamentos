import FakeCacheProvider from '../../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from '../createCredit/CreateCreditUseCase';
import { ListAllCreditsUseCase } from './ListAllCreditsUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let listAllCreditsUseCase: ListAllCreditsUseCase;
let createCreditUseCase: CreateCreditUseCase;
let cacheProvider: FakeCacheProvider;

describe('List all credits', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    cacheProvider = new FakeCacheProvider();
    listAllCreditsUseCase = new ListAllCreditsUseCase(cacheProvider, fakeCreditsRepository);
    createCreditUseCase = new CreateCreditUseCase(cacheProvider, fakeCreditsRepository);
  });

  test('should be able to list all credits', async () => {
    createCreditUseCase.execute({ name: 'Teste1', value: 5000, date: new Date() });
    createCreditUseCase.execute({ name: 'Teste2', value: 5000, date: new Date() });
    createCreditUseCase.execute({ name: 'Teste3', value: 5000, date: new Date() });
    createCreditUseCase.execute({ name: 'Teste4', value: 5000, date: new Date() });

    const credits = await listAllCreditsUseCase.execute();

    expect(credits).toHaveLength(4);
  });

  test('should return an empty array if no credits', async () => {
    const credits = await listAllCreditsUseCase.execute();
    expect(credits).toHaveLength(0);
  });
});
