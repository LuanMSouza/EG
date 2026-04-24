import 'server-only';

import { Pool } from 'pg';

const globalForPg = global as unknown as { pool: Pool };

export const pool =
    globalForPg.pool ||
    new Pool({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: Number(process.env.PG_PORT),
    });
