import Dulieu from "../../util/filedulieu/Dulieu_tieng_anh_lop_1";
import Show_TAPhothong from "../../util/ThuchanhTAPhothong/Show_TAPhothong";
export default function B1_Lop1() {
    return (
        <div>
            <div className="container text-center">
                {Show_TAPhothong(Dulieu)}
            </div>
        </div>

    )
}
