import { Link } from 'react-router-dom';
export default function Header() {




    return (
        <div >
            <div className="row A0_topconent">
                <div className="col-6">
                    <Link to="/home">
                        <b><i className="A0_01_topcontent">English<span style={{ color: "blue" }}>Tool</span>.co </i></b>
                    </Link>

                </div>
                <div className="col-6">
                    <b>
                        <i className="A0_02_topcontent">
                            Rèn luyện giao tiếp thông dụng!
                        </i>
                    </b>

                </div>
            </div>
        </div >
    )
}