import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { Credit } from '@modules/credits/infra/typeorm/entities/Credit';
import { Debt } from '@modules/debts/infra/typeorm/entities/Debt';

@Entity('billing-cycles')
class BillingCycle {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public month: number;

  @Column()
  public year: number;

  @Column()
  public credits: Array<Credit>;

  @Column()
  public debits: Array<Debt>;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { BillingCycle };
