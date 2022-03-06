import { Link } from 'react-router-dom';
export default function A1_sidebar(props) {
    return (
        <div className="A1_01_sidebar">
            <div style={{ textAlign: "center" }}>
                <Link to={'/trangchu'}>
                    <i className="A1_01_a_span_sidebar">Tìm hiểu chi tiết </i>
                </Link>
            </div>
            <div>
                <Link to={'/thuchanhcoban'}>
                    <button
                        type="button" className="btn btn-secondary">
                        <i className="bi bi-bicycle"></i>
                        <span> Luyện tập cơ bản</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/thuchanhnangcao'}>
                    <button
                        type="button" className="btn btn-secondary">
                        <i class="bi bi-symmetry-horizontal"></i>
                        <span> Luyện tập nâng cao</span>
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
                        <i class="bi bi-paragraph"></i>
                        <span>  Luyện ghép âm</span>
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
                        <i class="bi bi-reception-2"></i>
                        <span>  Thử độ nhạy (Tiếng việt)</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/thudonhaycn'}>
                    <i></i>
                    <button
                        type="button" className="btn btn-secondary">
                        <i class="bi bi-reception-2"></i>
                        <span>  Thử độ nhạy (Tiếng trung)</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/muakhoahoc'}>
                    <button
                        type="button" className="btn btn-secondary">
                        <i className="bi bi-cart-plus"></i>
                        <span>  Mua khóa học</span>
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

        </div >
    )
}