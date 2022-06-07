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
                Nói tiếng anh như gió?
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/70_iSp8uboo") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Cần nhấn mạnh lại rằng,
                chúng ta đang giải quyết vấn đề làm sao để đạt được kỹ năng nhanh chóng,
                chứ không phải làm sao để nghe nói thành thạo như người bản xứ.
            </p>
            <p>
                Hãy để nhưng người muốn nghe nói như người bản xứ dành nhiều thời gian hơn cho tiếng anh.
                Chúng ta sẽ bắt đầu với 90 giờ nỗ lực chuyên tâm, tập trung, thông minh.
            </p>
            <p>
                Chúng ta đang nhắm tới những kết quả mà bản thân mong muốn chỉ với một phần nỗ lực.
                Có thể bạn sẽ không bao giờ giành được huy chương vàng,
                nhưng bạn sẽ đạt được những phần thưởng bạn quan tâm trong thời gian ngắn hơn.
            </p>
            <p>
                Nếu cuối cùng bạn quyết định phải thành thạo kỹ năng tiếng anh ở đẳng cấp cao hơn,
                bạn sẽ có cơ hội tốt hơn để thành công nếu bạn bắt đầu với 90 tiếng học kỹ năng nhanh.
                Bằng cách biết bản thân đang hướng tới điều gì, học những nguyên tắc cơ bản,
                luyện tập theo cách thông minh và phát triển một quy trình luyện tập,
                bạn sẽ tiến bộ nhanh hơn và đều đặn hơn. Bạn sẽ đạt được trình độ chuyên gia trong thời gian kỷ lục.
            </p>


         


           
        <Postmenu />
        </div >

    )
}