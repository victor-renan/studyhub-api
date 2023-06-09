import { Entity, ObjectIdColumn, ObjectId, Column, OneToOne } from "typeorm";


@Entity()
export class Atividade {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  file: string;

  @Column()
  materia: string;
}