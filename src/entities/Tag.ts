import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('tags') // referencia minha entidade com a tabela users no BD
class Tag {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string; 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() { 
    if (!this.id) { 
      this.id = uuid();
    }
  }
}

export default Tag;