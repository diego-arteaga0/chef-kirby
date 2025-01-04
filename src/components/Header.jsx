import kirby from "../images/kirby.webp"

export default function Header(){
    return (
            <header>
                <img src={kirby} alt="Chef Kirby" />
                <h1>Chef Kirby</h1>
            </header>
    )
}