import { Link } from 'react-router-dom';
export default function A1_sidebar(props) {
    return (
        <div className="A1_01_sidebar">
            {/* <div>
                <b><i className="A1_01_sidebar_name">EngPraticeCenter</i></b>
                <i onClick={() => {
                      props.setA1_sidebar_offon(!props.A1_sidebar_offon)
                }} style={{ cursor: "pointer" }} className="bi bi-arrow-left-circle-fill fa-2x"></i>
                
            </div> */}
            <div style={{ textAlign: "center" }}>
                <Link to={'/dangky'}>
                    <i className="A1_01_a_span_sidebar">Học thử MIỄN PHÍ</i>
                </Link>
            </div>
            <div>
                <Link to={'/thuchanhcoban'}>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-bicycle"></i>
                        <span> Luyện tập cơ bản</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/thuchanhnangcao'}>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-bicycle"></i>
                        <span> Luyện tập nâng cao</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/hockienthucchuyenmon'}>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-journals"></i>
                        <span>  Học kiến thức chuyên môn (sử dụng tiếng anh)</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/nhacipalyrics'}>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-file-music"></i>
                        <span>  Nhạc IPA-Lyrics</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/nhacipalyrics'}>
                    <i></i>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-book"></i>
                        <span>  Bài học lý thuyết (Ngữ pháp)</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/nhacipalyrics'}>
                    <i></i>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-book"></i>
                        <span>  Bài học lý thuyết (Phiên âm và nhịp điệu)</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/muakhoahoc'}>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-cart-plus"></i>
                        <span>  Mua khóa học</span>
                    </button>
                </Link>
            </div>
            <div>
                <Link to={'/hoso'}>

                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-person-bounding-box"></i>
                        <span>  Hồ sơ</span>
                    </button>
                </Link>
            </div>
            <div>
                <button type="button" className="btn btn-secondary">
                    <i className="bi bi-box-arrow-in-left"></i>
                    <span>  Đăng xuất</span>
                </button>
            </div>

        </div >
    )
}