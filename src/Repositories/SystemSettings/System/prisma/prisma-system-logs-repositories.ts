import { PrismaClient } from "../../../../../generated/prisma/client";
import { SystemLogDatas,SystemLogFilters } from "../../../../interfaces/System/interface";
import { ISystemLogsRepositories } from "../I-system-logs-repositories";

class PrismaSystemLogsRepository implements ISystemLogsRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async create(datas: SystemLogDatas): Promise<any> {
    return await this.prisma.systemLogs.create({
      data: {
        system_agent: datas.system_agent,
        ip_address:   datas.ip_address,
        action:       datas.action,
        id_account_fk: datas.id_account_fk,
      },
    });
  }

  async findAll(take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.systemLogs.findMany({
      orderBy: { created_at: "desc" },
      include: {
        account_details: {
          select: { email: true, provider: true },
        },
      },
      take,
      skip,
    });
  }

  async findByAccount(id_account_fk: string, take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.systemLogs.findMany({
      where: { id_account_fk },
      orderBy: { created_at: "desc" },
      take,
      skip,
    });
  }

  async findWithFilters(filters: SystemLogFilters, take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.systemLogs.findMany({
      where: this.buildWhere(filters),
      orderBy: { created_at: "desc" },
      include: {
        account_details: {
          select: { email: true, provider: true },
        },
      },
      take,
      skip,
    });
  }

  async count(): Promise<number> {
    return await this.prisma.systemLogs.count();
  }

  async countByAccount(id_account_fk: string): Promise<number> {
    return await this.prisma.systemLogs.count({ where: { id_account_fk } });
  }

  async countWithFilters(filters: SystemLogFilters): Promise<number> {
    return await this.prisma.systemLogs.count({ where: this.buildWhere(filters) });
  }

  async deleteByAccount(id_account_fk: string): Promise<any> {
    return await this.prisma.systemLogs.deleteMany({ where: { id_account_fk } });
  }

  async deleteOlderThan(date: Date): Promise<any> {
    return await this.prisma.systemLogs.deleteMany({
      where: { created_at: { lt: date } },
    });
  }

  async deleteAll(): Promise<any> {
    return await this.prisma.systemLogs.deleteMany();
  }

  // ── where builder ────────────────────────────────────────────────────
  private buildWhere(filters: SystemLogFilters) {
    const where: any = {};

    if (filters.id_account_fk) where.id_account_fk = filters.id_account_fk;
    if (filters.action)        where.action = { contains: filters.action, mode: "insensitive" };
    if (filters.ip_address)    where.ip_address = filters.ip_address;

    if (filters.from || filters.to) {
      where.created_at = {};
      if (filters.from) where.created_at.gte = new Date(filters.from);
      if (filters.to)   where.created_at.lte = new Date(filters.to);
    }

    return where;
  }
}

export { PrismaSystemLogsRepository };
