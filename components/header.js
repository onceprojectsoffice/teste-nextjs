const Header = () => (

    <div>
        <meta name="viewport" content="initial-scale=1.0,width-device-width"/>
        <link rel="stylesheet" href="/css/header/navbar.css"></link>

        <div class="navbar">
            <div class="navbar-content">
            <div class="navbar-logo">
                <a href="/"><img src="/images/logo.png"/></a>
            </div>
                <ul>
                    <li><a href="/">INICIO</a></li>
                    <li><a href="/plans">PLANOS</a></li>
                    <li><a href="/terms">TERMOS</a></li>
                    <li><a href="/staff">STAFF</a></li>
                    <li><a href="/discord">SUPORTE</a></li>
                    <li><a href="/dashboard">DASHBOARD</a></li>
                </ul>
            </div>
        </div>
    </div>
)

export default Header;