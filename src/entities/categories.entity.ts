import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("categories")
class Categories {
  @Column({ length: 50 })
  name: string;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Properties, (properties) => properties.category)
  properties: Properties[];
}

export { Categories };
