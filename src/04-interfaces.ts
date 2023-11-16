/**
 * Todo lo que va en las interfaces va público
 */
export interface Driver {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(database: string): boolean;
}

export class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}

  disconnect(): void {}

  isConnected(database: string): boolean {
    return true;
  }
}

export class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}

  disconnect(): void {}

  isConnected(database: string): boolean {
    return true;
  }
}
