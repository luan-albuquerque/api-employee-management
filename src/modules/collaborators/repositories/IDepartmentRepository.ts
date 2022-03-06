import { ICreateDepartmentDTO } from "../dtos/ICreateDepartmentDTO";
import { Department } from "../entities/Department";

interface IDepartmentRepository {
  createDepartment({ description }: ICreateDepartmentDTO): Promise<void>;
  listDepartment(): Promise<Department[]>;
  findByDepartment(description: string): Promise<Department>;
  findByIdDepartment(id: string): Promise<Department>;
  deleteDepartment(id: string): Promise<void>;
}

export { IDepartmentRepository };
