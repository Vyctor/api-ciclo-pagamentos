import { DebtStatus } from '../infra/typeorm/entities/Debt';

interface IUpdateDebtDTO {
  name: string;
  status: DebtStatus;
  value: string;
}

export { IUpdateDebtDTO };
