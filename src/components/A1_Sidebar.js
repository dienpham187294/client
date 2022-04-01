import { Link } from 'react-router-dom';
export default function A1_sidebar(props) {
    return (
        <div className="A1_01_sidebar">
            <div className="A1_01_sidebar_02" >
                <div>
                    <Link to={'/trangchu'}>
                        Thực hành qua trò chơi
                    </Link>
                </div>
            </div>
            <div className="A1_01_sidebar_01">
                <div>
                    <Link to={'/thuchanhcoban'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-bicycle"></i>
                            <span> Luyện tập logic ghép âm</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/thuchanhnangcao'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-symmetry-horizontal"></i>
                            <span> Luyện tập 5000 từ vựng</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/thuchanhkienthuc'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-journals"></i>
                            <span>  Học kiến thức chuyên môn (sử dụng tiếng anh)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/luyen-ghep-am'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-paragraph"></i>
                            <span>  Luyện ghép âm - câu đơn</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/nhacipalyrics'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-file-music"></i>
                            <span>  Nhạc IPA-Lyrics</span>
                        </button>
                    </Link>
                </div>

                <div>
                    <Link to={'/nguphap'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>  Bài học lý thuyết (Ngữ pháp)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/phienam'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-book"></i>
                            <span>  Bài học lý thuyết (Phiên âm và nhịp điệu)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/thudonhay'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-reception-2"></i>
                            <span>  Thử độ nhạy (Tiếng việt)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/thudonhaycn'}>
                        <i></i>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-reception-2"></i>
                            <span>  Thử độ nhạy (Tiếng trung)</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={'/pricing'}>
                        <button
                            type="button" className="btn btn-secondary">
                            <i className="bi bi-cart-plus"></i>
                            <span>  Các khóa thực hành</span>
                        </button>
                    </Link>
                </div>
                <div>
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
                </div>
            </div>
        </div >
    )
}