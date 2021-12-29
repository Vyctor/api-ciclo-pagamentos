import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

enum DebtStatus {
  PAGO,
  PENDENTE,
  AGENDADO,
}

@Entity('debts')
class Debt {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public status: DebtStatus;

  @Column()
  public value: number;

  @Column()
  public date: Date;

  @CreateDateColumn()
  public created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Debt, DebtStatus };
