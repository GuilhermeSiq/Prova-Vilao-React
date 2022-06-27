import { cadastrovilao } from '../../api/vilaoapi';
import {useState} from 'react'
import {useParams} from 'react-router-dom'

export default function Index(){
	const [vilao, setVilao] = useState('');
    const [maldades, setMaldades] = useState('');
    const [poder, setPoder] = useState('');


const { idparams } = useParams();

async function salvarClick(){
	try {
        if(!vilao || !maldades){
            alert('Preencha todos os campos')
        }
        else{
            const resposta = await cadastrovilao(vilao, maldades, poder)
            alert('Vilao cadastrado')
        }
    } catch (err) {
        alert(err.message)
    }
    
}

return(

<div>
        <div>


            <div>
                <p>AGENDAR</p>
            </div>


            <p>
                Vilão:
            </p>

            <input type='text' placeholder='Insira o nome do Vilao' value={vilao} onChange={e => setVilao(e.target.value)}/>


            <div>

            <p>
                Maldades:
            </p>

            <div>
            <input  type='text' placeholder='Insira as maldades' value={maldades} onChange={e => setMaldades(e.target.value)}/>
            </div>

            <p>
                Tem Poder ?:
            </p>

            </div>


            <div >

            

            <input type='checkbox' placeholder='Tem poder ?' checked={poder} onChange={e => setPoder(e.target.checked)}/>


            <button onClick={salvarClick}>Inserir</button>
            </div>
    </div>
</div>
)}


