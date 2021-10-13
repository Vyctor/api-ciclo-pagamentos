import { container } from 'tsyringe';

import { CreditsRepository } from '@modules/credits/infra/typeorm/repositories/CreditsRepository';
import { ICreditsRepository } from '@modules/credits/repositories/ICreditsRepository';
import { DebtsRepository } from '@modules/debts/infra/typeorm/repositories/DebtsRepository';
import { IDebtsRepository } from '@modules/debts/repositories/IDebtsRepository';

container.registerSingleton<IDebtsRepository>('DebtsRepository', DebtsRepository);

container.registerSingleton<ICreditsRepository>('CreditsRepository', CreditsRepository);
