import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @Generated('uuid')
  @PrimaryColumn({ name: 'id', type: 'uuid', primaryKeyConstraintName: 'id' })
  id: string;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'email', type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone', nullable: true })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp with time zone', nullable: true })
  deletedAt: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
