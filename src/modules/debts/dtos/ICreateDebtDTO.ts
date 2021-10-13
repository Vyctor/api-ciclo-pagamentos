import { DebtStatus } from '../infra/typeorm/entities/Debt';

interface ICreateDebtDTO {
  name: string;
  status: DebtStatus;
  value: number;
}

export { ICreateDebtDTO };
