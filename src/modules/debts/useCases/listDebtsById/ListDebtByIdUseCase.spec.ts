import FakeCacheProvider from '../../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { FakeDebtsRepository } from '../../repositories/fakes/FakeDebtsRepository';
import { CreateDebtUseCase } from '../createDebt/CreateDebtUseCase';
import { ListDebtByIdUseCase } from './ListDebtByIdUseCase';

let fakeDebtsRepository: FakeDebtsRepository;
let listDebtByIdUseCase: ListDebtByIdUseCase;
let createDebtUseCase: CreateDebtUseCase;
let cacheProvider: FakeCacheProvider;

describe('List all debts', () => {
  beforeEach(() => {
    fakeDebtsRepository = new FakeDebtsRepository();
    cacheProvider = new FakeCacheProvider();
    listDebtByIdUseCase = new ListDebtByIdUseCase(fakeDebtsRepository);
    createDebtUseCase = new CreateDebtUseCase(cacheProvider, fakeDebtsRepository);
  });

  test('should be able to find a debt by id', async () => {
    const newDebt = await createDebtUseCase.execute({ name: 'Teste1', value: 5000 });

    const debtFinded = await listDebtByIdUseCase.execute(newDebt.id);

    expect(debtFinded).toHaveProperty('id');
  });

  test('should return undefined if inexistant debt', async () => {
    const id = 'non-existant-id';
    const debts = await listDebtByIdUseCase.execute(id);
    expect(debts).toBe(undefined);
  });
});
