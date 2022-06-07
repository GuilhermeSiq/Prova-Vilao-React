import { con } from './connection.js';

export async function inserirvilao(vilao) {
    const comando = 
    `
    INSERT INTO tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
                  VALUES (?, ?, ?) `
    
    const [resposta] = await con.query(comando,[vilao.vilao, vilao.maldades, vilao.superpoder]); 
  vilao.id =  resposta.insertId;
  
  return vilao;
}
