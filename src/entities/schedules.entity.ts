import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedules {
  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => User)
  user: User;
}

export { Schedules };
