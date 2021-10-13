import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Credit };
