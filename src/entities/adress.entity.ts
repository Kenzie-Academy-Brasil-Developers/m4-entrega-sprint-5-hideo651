import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("adress")
class Adress {
  @Column({ length: 50 })
  district: string;

  @Column({ length: 20 })
  zipCode: string;

  @Column({ nullable: true })
  number?: string;

  @Column({ length: 25 })
  city: string;

  @Column({ length: 25 })
  state: string;

  @PrimaryGeneratedColumn("uuid")
  id: string;
}

export { Adress };
