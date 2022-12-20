import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Categories {
  @Column({ length: 50 })
  name: string;

  @PrimaryGeneratedColumn("uuid")
  id: string;
}

export { Categories };
