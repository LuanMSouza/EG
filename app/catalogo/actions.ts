'use server'

import { pool } from '@/lib/db';

export type ProdutoCatalogo = {
    id: number;
    nome: string;
    preco: number;
    obs: string | null;
    descricao: string | null;
    imagens: string[];
}

export async function getCatalogo(): Promise<ProdutoCatalogo[]> {
    const { rows } = await pool.query(`
        SELECT
            p.id,
            p.nome,
            p.preco_venda AS preco,
            p.obs,
            p.descricao,
            array_agg(i.img_url ORDER BY i.id) AS imagens
        FROM produtos p
        JOIN imagens i ON i.produto_id = p.id
        GROUP BY p.id
        ORDER BY p.nome
    `);
    return rows;
}
