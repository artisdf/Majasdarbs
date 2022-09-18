import Students from "./Students";

const Header = () => {
    const onClick = () => {

    }
    return (
        <header className={'header'}>
            <h1>Mūzikas skolas skolēni</h1>
            <button className={'btn'} onClick={onClick}>Pievienot</button>
        </header>
    )
};

export default Header;