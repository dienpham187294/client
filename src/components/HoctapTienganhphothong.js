import Dulieu from "../util/filedulieu1/Dulieu_tieng_anh_lop_1";
import Show_Demo_Sentence_Basic from "../util/Show/Show_tieng_anh_lop_1";
export default function HoctapTienganhphothong() {
    return (
        <div>
            <div className="container text-center">
                {Show_Demo_Sentence_Basic(Dulieu, "tieng-anh-lop-1", "thuchanh/app/tieng-anh-lop-1?token=")}
            </div>
        </div>
    )
}

