import { FakeDebtsRepository } from '../../repositories/fakes/FakeDebtsRepository';
import { CreateDebtUseCase } from '../createDebt/CreateDebtUseCase';
import { ListAllDebtsUseCase } from './ListAllDebtsUseCase';

let fakeDebtsRepository: FakeDebtsRepository;
let listAllDebtsUseCase: ListAllDebtsUseCase;
let createDebtUseCase: CreateDebtUseCase;

describe('List all debts', () => {
  beforeEach(() => {
    fakeDebtsRepository = new FakeDebtsRepository();
    listAllDebtsUseCase = new ListAllDebtsUseCase(fakeDebtsRepository);
    createDebtUseCase = new CreateDebtUseCase(fakeDebtsRepository);
  });

  test('should be able to list all debts', async () => {
    createDebtUseCase.execute({ name: 'Teste1', value: 5000 });
    createDebtUseCase.execute({ name: 'Teste2', value: 5000 });
    createDebtUseCase.execute({ name: 'Teste3', value: 5000 });
    createDebtUseCase.execute({ name: 'Teste4', value: 5000 });

    const debts = await listAllDebtsUseCase.execute();

    expect(debts).toHaveLength(4);
  });

  test('should return an empty array if no debt', async () => {
    const debts = await listAllDebtsUseCase.execute();
    expect(debts).toHaveLength(0);
  });
});