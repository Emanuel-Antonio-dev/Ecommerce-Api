interface SystemLogDatas {
  id_system_log?: number;
  system_agent: string;
  ip_address: string;
  action: string;
  id_account_fk: string;
  created_at?: Date | string;
}

interface SystemLogFilters {
  id_account_fk?: string;
  action?: string;
  ip_address?: string;
  from?: Date | string;
  to?: Date | string;
}

export { SystemLogDatas, SystemLogFilters };
