'use server'

import { pool } from '@/lib/db';

export async function getProdutos() {
    const produtos = await pool.query('SELECT id, nome FROM produtos');
    return produtos.rows;
}

export async function getTemas() {
    const temas = await pool.query('SELECT id, nome FROM temas');
    return temas.rows;
}

export async function getImagens() {

    const imagens = await pool.query(`
        SELECT i.id,
		p.nome AS produto,
        p.preco_venda AS preco,
		t.nome AS tema,
		i.img_url AS img
        FROM imagens i
        JOIN produtos p ON i.produto_id = p.id
        JOIN temas t ON i.tema_id = t.id
    `);

    return imagens.rows;
}

