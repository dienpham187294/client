import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div >
            <div className="row A0_topconent">
                <div className="col-6">
                    <Link to="/trangchu">
                        <b><i className="A0_01_topcontent">Eric<span style={{ color: "blue" }}>Ph</span> </i></b>
                    </Link>

                </div>
                <div className="col-6">
                    <b>  <i className="A0_02_topcontent">Học thôi là chưa làm được, phải thực hành đủ nhiều!</i></b></div>
            </div>
        </div >
    )
}