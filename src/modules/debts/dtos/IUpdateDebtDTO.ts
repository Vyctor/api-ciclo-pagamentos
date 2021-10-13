import { DebtStatus } from '../infra/typeorm/entities/Debt';

interface IUpdateDebtDTO {
  id: string;
  name: string;
  status: DebtStatus;
  value: number;
}

export { IUpdateDebtDTO };
