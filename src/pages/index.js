import Image from 'next/image';

//TODO: lembrar que para adicionar as imagens não precisa do {}
import Logo from '../assets/logo.svg';


export default function Inicio(){
    return(
        <>
            <h1>Hello World</h1>
            <Image
                src={Logo}
                alt="Logo"
            />
        </>
    )
}