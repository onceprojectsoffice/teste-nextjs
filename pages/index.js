import Header from "../components/header";
import Footer from "../components/footer";

function Home() {

  return (
    <div>
      <meta charSet="utf-8"/>
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Site oficial da F404 Store."/>
      <meta name="viewport" content="initial-scale=1.0,width-device-width"/>
      <link rel="shortcut icon" href="../public/favicon.ico" />

      <title>F404 Store - Venda de bots para Discord!</title>
      
      <Header/>
      <Footer/>

    </div>
  )
}

export default Home;