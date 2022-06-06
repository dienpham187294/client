import { Link } from 'react-router-dom';
export default function A1_sidebar(props) {
    return (
        <div className="A1_01_sidebar">
            <div className="A1_01_sidebar_02" >
                <div>
                    <Link to={'/home'}>
                        Khởi động
                    </Link>
                </div>
            </div>

            <div className="A1_01_sidebar_01">
                {/* <div>
                    <Link to={'/thuchanhcoban'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Rèn luyện <br />Làm chủ nghe - nói</span>
                        </button>
                    </Link>
                </div> */}

                <div>
                    <Link to={'/ipa-study'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>Lý thuyết về Ngữ âm</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/sound-pairing'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>Cách ghép âm (Quan trọng)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/posts-14'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>Mẫu câu cơ bản.</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/posts-12'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>1000 từ thông dụng!</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/posts-13'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>1000 câu thông dụng!</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/part-2-a'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Giai đoạn 2 (a)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/part-2-b'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Giai đoạn 2 (b)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/part-2-c'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Giai đoạn 2 (c)</span>
                        </button>
                    </Link>
                </div>
                {/* <div>
                    <Link to={'/part-3-a'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Giai đoạn 3</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/offer-1'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Offer </span>
                        </button>
                    </Link>
                </div> */}
                <div>
                    <Link to={'/learn-sts'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>Luyện ghép câu.</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/luyen-ghep-am'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-paragraph"></i>
                            <span>Luyện nói</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/listen'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-paragraph"></i>
                            <span>  Luyện nghe</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/part-3-b'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Giai đoạn 3</span>
                        </button>
                    </Link>
                </div>

                {/* <div>
                    <Link to={'/offer-2'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Offer - 2</span>
                        </button>
                    </Link>
                </div> */}
                <div>
                    <Link to={'/part-4'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Giai đoạn 4</span>
                        </button>
                    </Link>
                </div>
                {/* <div>
                    <Link to={'/offer-3'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Offer </span>
                        </button>
                    </Link>
                </div> */}
                <div>
                    <Link to={'/part-5'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Giai đoạn 5</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/appendix-1'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Phụ lục 1</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/appendix-2'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Phụ lục 2</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/appendix-3'}>
                        <button
                            type="button" className="btn btn-secondary">
                            {/* <i className="bi bi-bicycle"></i> */}
                            <span> Phụ lục 3</span>
                        </button>
                    </Link>
                </div>
                {/* <div>
                    <Link to={'/thuchanhcoban'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Rèn luyện <br />Làm chủ nghe - nói</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/Pronunciation'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Rèn luyện <br />Làm chủ ghép âm</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/thuchanhnangcao'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-symmetry-horizontal"></i>
                            <span> Khóa rèn luyện <br />Nâng cao</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/thuchanhkienthuc'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-journals"></i>
                            <span>  Học kiến thức <br />
                                Mua bán sáp nhập</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/luyen-ghep-am'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-paragraph"></i>
                            <span>  Luyện nói</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/luyen-nghe'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-paragraph"></i>
                            <span>  Luyện nghe</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/nhacipalyrics'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-file-music"></i>
                            <span>  Nhạc IPA-Lyrics</span>
                        </button>
                    </Link>
                </div> */}

                {/* <div>
                    <Link to={'/nguphap'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>  Bài học lý thuyết (Ngữ pháp)</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/ipa-study'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>  Bài học lý thuyết (Phiên âm và nhịp điệu)</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/3000-basic-words'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>Luyện tập<br /> <i>Hơn 3000 từ vựng cơ bản nhất</i></span>
                        </button>
                    </Link>
                </div> */}
                <div>
                    <Link to={'/test-AIipa'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-reception-2"></i>
                            <span>Thử độ nhạy<br />Tiếng việt</span>
                        </button>
                    </Link>
                </div>
                {/* <div>
                    <Link to={'/thudonhaycn'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-reception-2"></i>
                            <span>  Thử độ nhạy<br />Tiếng trung</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/pricing'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-cart-plus"></i>
                            <span>  Các khóa thực hành</span>
                        </button>
                    </Link>
                </div> */}
                {/* <div>
                    <Link to={'/hoso'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-person-bounding-box"></i>
                            <span>  Hồ sơ</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <button
                        type="button" className="btn btn-secondary">
                        <i className="bi bi-box-arrow-in-left"></i>
                        <span>  Đăng xuất</span>
                    </button>
                </div> */}
            </div>
        </div >
    )
}