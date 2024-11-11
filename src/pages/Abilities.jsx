

const Abilities = () => {
    return (
        <div className="container">
            <div id="dovednosti">
                <h1 className="mt-5">Dovednosti</h1>
                <div className="d-flex flex-wrap gap-2 justify-content-center mt-5">
                    <div className="card shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'/img/html5.png'} className="card-img-top w-50 m-auto" alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>HTML 5</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'/img/css3.png'} className="card-img-top w-50 m-auto" alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>CSS 3</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'./img/javascript.png'} className="card-img-top w-50 m-auto"  alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>JavaScript</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-2 shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'./img/bootstrap.png'} className="card-img-top w-50 m-auto"  alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>Bootstrap</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-2 shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'./img/node-js.png'} className="card-img-top w-75 m-auto"  alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>Node.js</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-2 shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'./img/react.png'} className="card-img-top w-50 m-auto"  alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>React</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-2 shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'./img/php.png'} className="card-img-top w-75 m-auto"  alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>PHP</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-2 shadow-sm text-center w-75 " style={{maxWidth: 152}} >
                        <div className="card-body d-flex align-items-center" style={{height: 150}} >
                            <img src={'./img/mysql.png'} className="card-img-top w-100 m-auto"  alt="" />
                        </div>
                        <div className="card-footer">
                            <h6>MySQL</h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped  bg-success" role="progressbar"
                                    style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abilities;