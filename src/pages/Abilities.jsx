import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import Card from '../components/Card';

const Abilities = () => {
    const { content } = useLanguage();

    const abilitiesData = [
        { title: 'HTML 5', image: '/img/html5.png', progress: 80 },
        { title: 'CSS 3', image: '/img/css3.png', progress: 75 },
        { title: 'JavaScript', image: '/img/javascript.png', progress: 75 },
        { title: 'Bootstrap', image: '/img/bootstrap.png', progress: 50 },
        { title: 'Node.js', image: '/img/node-js.png', progress: 25 },
        { title: 'React', image: '/img/react.png', progress: 25 },
        { title: 'PHP', image: '/img/php.png', progress: 25 },
        { title: 'MySQL', image: '/img/mysql.png', progress: 25 },
    ];

    return (
        <div className="container">
            <div id="dovednosti">
                <h1 className="mt-5">{content.abilities}</h1>
                <div className="d-flex flex-wrap gap-2 justify-content-center mt-5">
                    {abilitiesData.map((ability, index) => (
                        <Card
                            type="abilities"
                            key={index}
                            title={ability.title}
                            image={ability.image}
                            progress={ability.progress}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Abilities;