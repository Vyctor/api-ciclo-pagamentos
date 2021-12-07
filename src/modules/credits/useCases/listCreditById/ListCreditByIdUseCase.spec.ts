import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from '../createCredit/CreateCreditUseCase';
import { ListCreditByIdUseCase } from './ListCreditByIdUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let listCreditByIdUseCase: ListCreditByIdUseCase;
let createCreditUseCase: CreateCreditUseCase;

describe('List all credits', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    listCreditByIdUseCase = new ListCreditByIdUseCase(fakeCreditsRepository);
    createCreditUseCase = new CreateCreditUseCase(fakeCreditsRepository);
  });

  test('should be able to find a credit by id', async () => {
    const newCredit = await createCreditUseCase.execute({ name: 'Teste1', value: 5000 });

    const creditFinded = await listCreditByIdUseCase.execute(newCredit.id);

    expect(creditFinded).toHaveProperty('id');
  });

  test('should return undefined if inexistant credit', async () => {
    const id = 'non-existant-id';
    const credits = await listCreditByIdUseCase.execute(id);
    expect(credits).toBe(undefined);
  });
});
