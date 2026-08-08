import type { LogLevel } from "../config/environment";

export class Logger {
  private level: LogLevel;
  private serviceName: string;

  constructor(serviceName = "KINGS-API", level: LogLevel = "info") {
    this.serviceName = serviceName;
    this.level = level;
  }

  private shouldLog(targetLevel: LogLevel): boolean {
    const levels: LogLevel[] = ["debug", "info", "warn", "error"];
    return levels.indexOf(targetLevel) >= levels.indexOf(this.level);
  }

  private formatMessage(level: LogLevel, message: string, meta?: Record<string, unknown>): string {
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      service: this.serviceName,
      level: level.toUpperCase(),
      message,
      ...(meta ? { meta } : {}),
    };
    return JSON.stringify(payload);
  }

  public debug(message: string, meta?: Record<string, unknown>): void {
    if (this.shouldLog("debug")) {
      console.debug(this.formatMessage("debug", message, meta));
    }
  }

  public info(message: string, meta?: Record<string, unknown>): void {
    if (this.shouldLog("info")) {
      console.info(this.formatMessage("info", message, meta));
    }
  }

  public warn(message: string, meta?: Record<string, unknown>): void {
    if (this.shouldLog("warn")) {
      console.warn(this.formatMessage("warn", message, meta));
    }
  }

  public error(message: string, meta?: Record<string, unknown>): void {
    if (this.shouldLog("error")) {
      console.error(this.formatMessage("error", message, meta));
    }
  }
}
