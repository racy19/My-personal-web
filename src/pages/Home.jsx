import { useState } from 'react';
import ReactImageLightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        '/img/ropik.jpg',
    ];

    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center">
                <div className="col-md-8 pe-4">
                    <h1 className="fst-italic fs-4 pt-5 pb-4">... Salve mundus!</h1>
                    <p>Zatím toho tu moc není, ale to se změní.</p>
                    <p>Vítejte na mé stránce, která vznikla v rámci projektu během rekvalifikačního kurzu
                        <em> Programátor www aplikací</em> od&nbsp;
                        <a href="https://www.itnetwork.cz" target="_blank" rel="noreferrer">ITnetwork s.r.o.</a>
                    </p>
                    <p>Zde jsem se učila a nyní stále zdokonaluji programování v jazyce <strong>JavaScript</strong>.
                        Používám framework <strong>Node.js</strong> a knihovnu <strong>React</strong>. Ke stylování
                        prezentační části webu využívám <strong>Bootstrap</strong>. Již dříve jsem se seznámila s
                        redakčním systémem <strong>WordPress</strong> a vytvářením vlastních themes.
                    </p>
                    <p>Kromě programování mě baví chodit do přírody a také prozkoumávat Československé opevnění.
                        Jeden zástupce je vidět zde na obrázku :)</p>
                </div>
                <div id="ropik" className="col-md-4">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`image ${index + 1}`}
                            className='mw-100'
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
                {isOpen && (
                    <ReactImageLightbox
                        mainSrc={images[0]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
            <h2 className="fs-5 mt-5">Moje projekty:</h2>
            <div className="d-flex gap-5">
            <div className="card mt-5" style={{width: 250}}>
                <div className="card-header">
                    <h5 className="card-title">Tato stránka</h5>
                </div>
                <div className="card-body text-center">
                    <img src={'img/ropik.jpg'} className="card-img" alt="Ropik" style={{maxWidth: 150}} />
                        <p className="card-text text-start mt-4">osobní webové portfolio</p>
                        <a href="https://github.com/racy19/" className="btn btn-primary"><i className="bi bi-github fs-5"></i></a>
                </div>
                <div className="card-footer bg-dark text-white">
                    <h6 className="text-center">React</h6>
                </div>
            </div>
            <div className="card mt-5" style={{width: 250}}>
                <div className="card-header">
                    <h5 className="card-title">Rick and Morty</h5>
                </div>
                <div className="card-body text-center">
                    <img src={'img/ram.png'} className="card-img" alt="Rick and Morty" style={{maxWidth: 150}} />
                        <p className="card-text text-start mt-4">stránka věnovaná postavičkám ze seriálu Rick and Morty</p>

                        <a href="https://backup.8u.cz" className="btn btn-primary me-2"><i className="bi bi-globe fs-5"></i></a>
                        <a href="https://github.com/racy19/Rick-and-Morty" className="btn btn-primary"><i class="bi bi-github fs-5"></i></a>
                </div>
                <div className="card-footer bg-dark text-white">
                    <h6 className="text-center">PHP + MySQL</h6>
                </div>
            </div>
            <div className="card mt-5" style={{width: 250}}>
                <div className="card-header">
                    <h5 className="card-title">Databáze členů rodiny</h5>
                </div>
                <div className="card-body text-center">
                    <img src={'img/family.png'} className="card-img" alt="Family" style={{maxWidth: 150}} />
                        <p className="card-text text-start mt-4">formulářová aplikace pro ukládání členů, databáze s vyhledáváním a filtrováním</p>

                        <p>odkaz bude brzy</p>
                </div>
                <div className="card-footer bg-dark text-white">
                    <h6 className="text-center">Node.js + MongoDB</h6>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Home;