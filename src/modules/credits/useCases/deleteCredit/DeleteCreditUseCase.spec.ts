import FakeCacheProvider from '../../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from '../createCredit/CreateCreditUseCase';
import { ListCreditByIdUseCase } from '../listCreditById/ListCreditByIdUseCase';
import { DeleteCreditUseCase } from './DeleteCreditUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let deleteCreditUseCase: DeleteCreditUseCase;
let createCreditUseCase: CreateCreditUseCase;
let listCreditByIdUseCase: ListCreditByIdUseCase;
let cacheProvider: FakeCacheProvider;

describe('List all credits', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    cacheProvider = new FakeCacheProvider();
    deleteCreditUseCase = new DeleteCreditUseCase(cacheProvider, fakeCreditsRepository);
    createCreditUseCase = new CreateCreditUseCase(cacheProvider, fakeCreditsRepository);
    listCreditByIdUseCase = new ListCreditByIdUseCase(fakeCreditsRepository);
  });

  test('should be able to delete a existant credit', async () => {
    const newCredit1 = await createCreditUseCase.execute({ name: 'Teste1', value: 5000 });

    await deleteCreditUseCase.execute(newCredit1.id);

    const deletedCredit = await listCreditByIdUseCase.execute(newCredit1.id);

    expect(deletedCredit).toBe(undefined);
  });
});
