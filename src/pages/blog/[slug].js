import { useRouter } from "next/router";

export default function DetailsPost() {
    const {query} = useRouter();

    return(
        <h1>Página detalhe do post: {query.slug}</h1>
    )
}