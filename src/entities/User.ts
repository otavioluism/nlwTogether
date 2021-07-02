import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

// <Entidades> -> ORM -> <DataBase> (users)  
// Entidade referencia uma tabela no bando de dados

@Entity('users') // referencia minha entidade com a tabela users no BD
export default class User {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() { 

    if(!this.id) { 
     this.id = uuid(); 
    }
    
  }

}
