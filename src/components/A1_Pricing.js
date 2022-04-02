export default function A1Pricing() {



    return (
        <div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check" viewBox="0 0 16 16">
                    <title>Check</title>
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </symbol>
            </svg> */}

            <div className="container py-3">
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                        {/* <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                            <span className="fs-4">Pricing example</span>
                        </a> */}

                        {/* <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
                            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
                            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
                            <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
                        </nav> */}
                    </div>

                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Khóa thực hành</h1>
                        <p className="fs-5 text-muted"></p>
                    </div>
                </header>

                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Rèn luyện logic phát âm</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">0 đồng<small className="text-muted fw-light">/8 buổi</small></h1>
                                    <hr />
                                    <h5>Làm gì trong khóa:</h5>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Học nguyên tắc ghép âm.</li>
                                        <li>Chơi trò chơi.*</li>
                                        <li>Thực hành trên 3000 lần.***</li>
                                    </ul>

                                    <h5>Đạt được sau khóa:</h5>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Thuần thục ghép âm.</li>
                                        <li>Nói được mọi từ.</li>
                                        <li>Nói nguyên câu chắc chắn người nghe sẽ hiểu.</li>
                                        <li>Phản xạ cơ bản</li>
                                        <li>Nắm được trên 300 từ vựng - 80 câu</li>
                                    </ul>
                                    {/* <a href="https://forms.gle/ifL2hpdT4HU4AU1eA">
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Đăng ký trải nghiệm miễn phí</button>
                                    </a> */}


                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Rèn luyện 5000 từ vựng</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">9 triệu<small className="text-muted fw-light">/3 tháng</small></h1>
                                    <hr />

                                    <h5>Làm gì trong khóa:</h5>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Chơi trò chơi.*</li>
                                        <li>Thực hành trên 20.000 lần.***</li>
                                    </ul>

                                    <h5>Đạt được sau khóa:</h5>
                                    <ul className="list-unstyled mt-3 mb-4">

                                        <li>Xử lý được 90% vấn đề giao tiếp thông dụng.</li>

                                        <li>Phản xạ tốt.</li>
                                        <li>Nắm được trên 5000 từ vựng-2000 câu.</li>
                                    </ul>
                                    {/* <a href="https://forms.gle/ifL2hpdT4HU4AU1eA">
                                        <button type="button" className="w-100 btn btn-lg btn-primary">Đăng ký</button>
                                    </a> */}

                                </div>
                            </div>

                        </div>

                        {/* <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-white bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">Khóa trọn gói</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">15 triệu<small className="text-muted fw-light">/khóa</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>30 users included</li>
                                        <li>15 GB of storage</li>
                                        <li>Phone and email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Đăng ký</button>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </main>
                <i>*Tất cả các bài thực hành đều dưới dạng trò chơi - kết hợp công nghệ nhận diện giọng nói.</i>
                <br />
                <i>***90% thời gian sẽ dành cho thực hành (nói chuẩn- nghe phản hồi - xử lý thông tin - phản hồi lại) .</i>
                <br />
                <i>***Mỗi lần nói chuẩn và nghe phản hồi tính là một lần thực hành.</i>

                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSebjbO-4u7yHQt-7DGb16Tca0GEfq6s8bXZPxiC0UZQ5dS0MA/viewform?embedded=true"
                    width="100%"
                    height="1000"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">Đang tải…</iframe>
                {/* <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img className="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
                            <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer> */}
            </div>

        </div>
    )
}