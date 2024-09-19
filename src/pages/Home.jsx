const Home = (props) => {
    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center">
                    <div className="col-md-8 pe-4">
                        <h1 className="fst-italic fs-4 pt-5 pb-4">... Salve mundus!</h1>
                        <p>Vítejte na mé stránce, která vznikla v rámci projektu během rekvalifikačního kurzu
                            <em>Programátor
                                www
                                aplikací</em> od <a href="https://www.itnetwork.cz" target="_blank" rel="noreferrer">ITnetwork s.r.o.</a>
                        </p>
                        <p>Zde jsem se učila a nyní stále zdokonaluji programování v jazyce <strong>JavaScript</strong>. Používám
                            framework 
                            <strong>Node.js</strong> a knihovnu <strong>React</strong>. Ke stylování prezentační části
                            webu
                            využívám 
                            <strong>Bootstrap</strong>. Již dříve jsem se seznámila s redakčním systémem 
                            <strong>WordPress</strong> a
                            vytvářením vlastních themes.
                        </p>
                        <p>Kromě programování mě baví chodit do přírody a také prozkoumávat Československé opevnění.
                            Jeden
                            zástupce
                            je vidět zde na obrázku :)</p>
                    </div>
                    <div id="ropik" className="col-md-4">
                        <a href={'./img/ropik.jpg'} title="řopík" rel="lightbox[ropik]">
                            <img src={require('./img/ropik.jpg')} alt="foto ropiku" className="img-fluid img-thumbnail shadow-sm" />
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default Home;