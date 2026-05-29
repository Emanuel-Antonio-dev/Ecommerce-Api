import { SystemLogDatas, SystemLogFilters } from "../../../interfaces/System/interface";

abstract class ISystemLogsRepositories {
  abstract create(datas: SystemLogDatas): Promise<any>;
  abstract findAll(take?: number, skip?: number): Promise<any[]>;
  abstract findByAccount(id_account_fk: string, take?: number, skip?: number): Promise<any[]>;
  abstract findWithFilters(filters: SystemLogFilters, take?: number, skip?: number): Promise<any[]>;
  abstract count(): Promise<number>;
  abstract countByAccount(id_account_fk: string): Promise<number>;
  abstract countWithFilters(filters: SystemLogFilters): Promise<number>;
  abstract deleteByAccount(id_account_fk: string): Promise<any>;
  abstract deleteOlderThan(date: Date): Promise<any>;
  abstract deleteAll(): Promise<any>;
}

export { ISystemLogsRepositories };
