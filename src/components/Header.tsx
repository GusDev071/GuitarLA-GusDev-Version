export default function Header() {

    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-left">
                    <a href="index.html">
                        <img className="header-logo" src="/img/logo.svg" alt="GuitarLA" />
                    </a>
                    <p className="header-text">
                        Guitarras artesanales con diseño y sonido excepcional
                    </p>
                </div>
                <div className="header-right">
                    <img className="header-guitarra" src="/img/header_guitarra.png" alt="" />
                </div>
            </div>
        </header>
    )
}