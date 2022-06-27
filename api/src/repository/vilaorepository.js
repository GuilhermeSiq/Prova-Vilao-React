import { con } from './connection.js';

export async function inserirvilao(vilao) {
    const comando = 
    
    `INSERT INTO tb_vilao (nm_vilao, ds_maldade, bt_super_poder)
                  VALUES (?, ?, ?) `
    
    const [resposta] = await con.query(comando,[vilao.vilao, vilao.maldades, vilao.superpoder]); 
  vilao.id =  resposta.insertId;
  
  return vilao;

  
}

export async function listadeviloes() {
  const comando = 
  `
  SELECT id_vilao			    id,
	       nm_vilao			    nome,
         ds_maldade		    maldades,
         bt_super_poder	  superpoder,
  FROM   tb_vilao `
  
  const [linhas] = await con.query(comando);
  return linhas;
  
}