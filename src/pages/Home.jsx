import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import ReactImageLightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useCallback } from 'react';
import Card from '../components/Card';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        '/img/ropik.jpg',
    ];

    const handleImageClick = useCallback((index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    }, []);

    const { content } = useLanguage();

    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center">
                <div className="col-md-8 pe-4">
                    <h1 className="fst-italic fs-4 pt-5 pb-4">... Salve mundus!</h1>
                    <div dangerouslySetInnerHTML={{ __html: content.introduction }} />
                </div>
                <div id="ropik" className="col-md-4">
                    {images.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`ropik ${index + 1}`}
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
            <h2 className="fs-5 mt-5">{content.projects}</h2>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-center gap-lg-5 gap-2">
                <Card
                    type = "project"
                    title={content.thisPage}
                    image="/img/ropik.jpg"
                    description={content.aboutThisPage}
                    footer="React"
                    links={[
                        { url: "https://github.com/racy19/My-personal-web", icon: "bi-github" }
                    ]}
                />
                <Card
                    type = "project"
                    title="Rick and Morty"
                    image="/img/ram.png"
                    description={content.aboutRickAndMorty}
                    footer="PHP + MySQL"
                    links={[
                        { url: "https://backup.8u.cz", icon: "bi-globe" },
                        { url: "https://github.com/racy19/Rick-and-Morty", icon: "bi-github" }
                    ]}
                />

                <Card
                    type = "project"
                    title={content.familyDatabase}
                    image="/img/family.png"
                    description={content.aboutFamilyDatabase}
                    footer="Node.js + MongoDB"
                    links={[]}
                />
            </div>

        </div>
    );
};

export default Home;