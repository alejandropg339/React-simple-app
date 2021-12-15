import { HeroeList } from "../hero/HeroeList"

export const MarvelScreen = () => {
    const publisher = 'Marvel Comics';
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr/>
            <HeroeList publisher={publisher} />
        </div>
    )
}