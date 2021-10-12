import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('credits')
class Credit {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public value: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { Credit };
