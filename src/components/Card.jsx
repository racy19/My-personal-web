import React from 'react';

const Card = ({ type, title, image, description, footer, links, progress }) => {
    if (type === 'abilities') {
        return (
            <div className="card shadow-sm text-center w-75" style={{ maxWidth: 152 }}>
                <div className="card-body d-flex align-items-center" style={{ height: 150 }}>
                    <img src={image} className="card-img-top w-50 m-auto" alt={title} />
                </div>
                <div className="card-footer">
                    <h6>{title}</h6>
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            style={{ width: `${progress}%` }}
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="card mt-5" style={{ width: 240 }}>
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-body text-center">
                <img src={image} className="card-img" alt={title} style={{ maxWidth: 150 }} />
                <p className="card-text text-start mt-4">{description}</p>
                {links && links.map((link, index) => (
                    <a key={index} href={link.url} className="btn btn-primary me-2">
                        <i className={`bi ${link.icon} fs-5`}></i>
                    </a>
                ))}
            </div>
            <div className="card-footer bg-dark text-white">
                <h6 className="text-center">{footer}</h6>
            </div>
        </div>
    );
};

export default Card;