import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Adress } from "./adress.entity";
import { Categories } from "./categories.entity";

@Entity("properties")
class Properties {
  @Column({ nullable: true, default: false })
  sold?: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Adress)
  @JoinColumn()
  adress: Adress;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;
}

export { Properties };
