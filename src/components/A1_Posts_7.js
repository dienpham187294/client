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
                Giá trị đích thực của việc học
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/QiqSp8QJJdg") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Nói như vậy không có nghĩa là việc học kỹ năng mà bạn muốn thành thạo không quan trọng.
                Học là điều quan trọng, nhưng không phải theo cách bạn nghĩ.
                Việc học những khái niệm liên quan tới kỹ năng giúp bạn tự biên tập hoặc tự chỉnh sửa khi bạn đang luyện tập.
            </p>
            <p>
                Nếu bạn biết cách chia động từ trong tiếng Anh,
                bạn có thể dễ dàng tự chỉnh sửa câu nói của bạn hơn khi bạn nói chuyện với người bản xứ.
                Nếu bạn học các từ vựng thông dụng,
                bạn có thể hiểu rõ hơn những gì người bản địa nói, đồng thời nhớ được từ hoặc cụm từ thích hợp để sử dụng khi bị tắc.
            </p>
            <p>
                Tiến sỹ Krashen gọi đó là giả thuyết giám sát.
                Việc học giúp bạn lập kế hoạch và thay đổi bản thân trong khi luyện tập.
                Đó chính là lý do tại sao việc học lại quan trọng.
                Vấn đề chỉ nảy sinh khi chúng ta nhầm lẫn giữa việc học với việc học hỏi kỹ năng.
            </p>
            <p>
                Nếu bạn muốn thành thạo một kỹ năng mới, bạn cần luyện tập nó theo ngữ cảnh.
                Việc học sẽ hỗ trợ việc luyện tập, nhưng không thể thay thế cho việc luyện tập được.
                Nếu biểu hiện là điều quan trọng thì chỉ riêng việc học là không bao giờ đủ.
            </p>



     <Postmenu />
        </div >

    )
}