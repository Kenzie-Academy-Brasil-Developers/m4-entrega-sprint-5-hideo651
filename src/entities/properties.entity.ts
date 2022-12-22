import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Adress } from "./adress.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules.entity";

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

  @OneToOne(() => Adress, { eager: true })
  @JoinColumn()
  address: Adress;

  @ManyToOne(() => Categories)
  category: Categories["id"];

  @OneToMany(() => Schedules, (property) => property.property)
  schedules: Schedules[];
}

export { Properties };
