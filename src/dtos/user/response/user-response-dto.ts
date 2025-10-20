export class UserResponseDTO {
  id!: string;
  email!: string;
  firstName?: string | null;
  lastName?: string | null;
  role!: string;
  createdAt!: Date;
  updatedAt!: Date;
}