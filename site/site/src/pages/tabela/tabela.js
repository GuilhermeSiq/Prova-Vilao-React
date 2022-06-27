import { listavilao } from '../../api/vilaoapi.js'
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const [vilao, setVILAO] = useState ([]);


	async function listadeviloes(){
        const resp = await listadeviloes();
        setVILAO(resp);
    }

    useEffect(() => {
        listadeviloes();
    }, [])

return(
    <table>
                        <thead>
                            <tr>
                                
                                <th>ID</th>
                                <th>VILAO</th>
                                <th>MALDADES</th>
                                <th>PODER</th>
                            </tr>
                        </thead>
                        <tbody>

                            {vilao.map(item =>
                         <tr>
                            <td>{item.id}</td>
                            <td>{item.vilao}</td>
                            <td>{item.maldades}</td>
                            <td>{item.poder}</td>
                        </tr>

                                )}                  
                        </tbody>
                    </table>
)

}
