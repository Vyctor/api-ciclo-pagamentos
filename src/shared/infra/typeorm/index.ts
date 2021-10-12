import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database_ciclo_pagamentos'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
      database: process.env.NODE_ENV === 'test' ? 'ciclo_pagamentos_test' : defaultOptions.database,
    }),
  );
};
