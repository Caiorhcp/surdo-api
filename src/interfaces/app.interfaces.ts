export interface HealthStatus {
    status: string;
    timestamp: string;
    environment: string;
    uptime: number;
    memory: NodeJS.MemoryUsage;
}

export interface AppInfo {
    name: string;
    version: string;
}