// import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
// import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
// import $ from "jquery"
// import { Link } from 'react-router-dom';
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>
            <h1>
                Chúng ta có quá nhiều thứ cần học – trong khi có quá ít thời gian.
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/4A-BXojrQMA") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Sự thật là, tiếng anh chỉ là một kỹ năng trong vô vàn các kỹ năng khác mà chúng ta muốn học.
            </p>
            <p>
                Tôi tin là bạn có thể hiểu được. Bạn có bao nhiêu thời gian “rảnh”
                mỗi ngày sau khi hoàn thành công việc và nghĩa vụ với gia đình?
                Bạn có cảm thấy bạn cần 36 đến 48 tiếng một ngày để cuối ngày mới có thời gian ngồi xuống học một thứ gì đó mới mẻ?
            </p>
            <p>
                Chúng ta không có nhiều thời gian rảnh,
                chúng ta chỉ sẵn sàng đầu tư số thời gian ít ỏi đó theo cách thông minh nhất có thể.
            </p>
            <p>
                Đó chính là lý do Giải pháp học kỹ năng tiếng anh nhanh chóng, dứt khoát ra đời.
            </p>
            <div className="A1Pricing_div1">
                <i>"Bạn muốn học kỹ năng, nhưng bạn chắc chắn không muốn quá trình đó kéo dài mãi."</i>
            </div>
            <p>
                Vậy, đâu sẽ các điểm mấu chốt một cách nhanh chóng để có thể tiến bộ vượt bậc mà không phải cảm thấy thất vọng thường xuyên?
            </p>
            <p>
                Có một câu nói thế này: <b>“Hãy làm việc theo cách thông minh hơn, đừng làm việc chăm chỉ hơn”</b>.
                Điều này có nghĩa là quá trình học kỹ năng thực ra không phải là số giờ bạn dành cho nó… mà là điều bạn thu lượm được từ quãng thời gian đó.
            </p>
           <Postmenu />
        </div >

    )
}