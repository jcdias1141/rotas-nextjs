import Image from 'next/image';
import Header from './header';

//TODO: lembrar que para adicionar as imagens não precisa do {}
import Logo from '../assets/logo.svg';


export default function Inicio(){
    return(
        <>
            <Header/>
            <h1>Hello World</h1>
            <Image
                src={Logo}
                alt="Logo"
                quality={50}
            />
        </>
    )
}