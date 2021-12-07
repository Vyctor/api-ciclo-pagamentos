import { FakeCreditsRepository } from '../../repositories/fakes/FakeCreditsRepository';
import { CreateCreditUseCase } from '../createCredit/CreateCreditUseCase';
import { ListCreditByIdUseCase } from '../listCreditById/ListCreditByIdUseCase';
import { DeleteCreditUseCase } from './DeleteCreditUseCase';

let fakeCreditsRepository: FakeCreditsRepository;
let deleteCreditUseCase: DeleteCreditUseCase;
let createCreditUseCase: CreateCreditUseCase;
let listCreditByIdUseCase: ListCreditByIdUseCase;

describe('List all credits', () => {
  beforeEach(() => {
    fakeCreditsRepository = new FakeCreditsRepository();
    deleteCreditUseCase = new DeleteCreditUseCase(fakeCreditsRepository);
    createCreditUseCase = new CreateCreditUseCase(fakeCreditsRepository);
    listCreditByIdUseCase = new ListCreditByIdUseCase(fakeCreditsRepository);
  });

  test('should be able to delete a existant credit', async () => {
    const newCredit1 = await createCreditUseCase.execute({ name: 'Teste1', value: 5000 });

    await deleteCreditUseCase.execute(newCredit1.id);

    const deletedCredit = await listCreditByIdUseCase.execute(newCredit1.id);

    expect(deletedCredit).toBe(undefined);
  });
});
