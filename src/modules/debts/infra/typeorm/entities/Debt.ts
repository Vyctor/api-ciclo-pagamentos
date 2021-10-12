import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { Debt, DebtStatus };
