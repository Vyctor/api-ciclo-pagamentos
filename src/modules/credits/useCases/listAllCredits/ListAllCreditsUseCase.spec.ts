import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from '../createCredit/CreateCreditUseCase';
import { ListAllCreditsUseCase } from './ListAllCreditsUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let listAllCreditsUseCase: ListAllCreditsUseCase;
let createCreditUseCase: CreateCreditUseCase;

describe('List all credits', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    listAllCreditsUseCase = new ListAllCreditsUseCase(fakeCreditsRepository);
    createCreditUseCase = new CreateCreditUseCase(fakeCreditsRepository);
  });

  test('should be able to list all credits', async () => {
    createCreditUseCase.execute({ name: 'Teste1', value: 5000 });
    createCreditUseCase.execute({ name: 'Teste2', value: 5000 });
    createCreditUseCase.execute({ name: 'Teste3', value: 5000 });
    createCreditUseCase.execute({ name: 'Teste4', value: 5000 });

    const credits = await listAllCreditsUseCase.execute();

    expect(credits).toHaveLength(4);
  });

  test('should return an empty array if no credits', async () => {
    const credits = await listAllCreditsUseCase.execute();
    expect(credits).toHaveLength(0);
  });
});
