import FakeCacheProvider from '../../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { FakeDebtsRepository } from '../../repositories/fakes/FakeDebtsRepository';
import { CreateDebtUseCase } from '../createDebt/CreateDebtUseCase';
import { ListDebtByIdUseCase } from '../listDebtsById/ListDebtByIdUseCase';
import { DeleteDebtUseCase } from './DeleteDebtUseCase';

let fakeDebtsRepository: FakeDebtsRepository;
let deleteDebtUseCase: DeleteDebtUseCase;
let createDebtUseCase: CreateDebtUseCase;
let listDebtByIdUseCase: ListDebtByIdUseCase;
let cacheProvider: FakeCacheProvider;

describe('List all debts', () => {
  beforeEach(() => {
    fakeDebtsRepository = new FakeDebtsRepository();
    cacheProvider = new FakeCacheProvider();
    deleteDebtUseCase = new DeleteDebtUseCase(cacheProvider, fakeDebtsRepository);
    createDebtUseCase = new CreateDebtUseCase(cacheProvider, fakeDebtsRepository);
    listDebtByIdUseCase = new ListDebtByIdUseCase(fakeDebtsRepository);
  });

  test('should be able to delete a existant debt', async () => {
    const newDebt = await createDebtUseCase.execute({ name: 'Teste1', value: 5000 });

    await deleteDebtUseCase.execute(newDebt.id);

    const deletedDebt = await listDebtByIdUseCase.execute(newDebt.id);

    expect(deletedDebt).toBe(undefined);
  });
});
