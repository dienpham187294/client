// import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
// import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
// import $ from "jquery"
import { Link } from 'react-router-dom';
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>
            <h1>
                Học kỹ năng với rèn luyện
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/MnPMZfFkz9s") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Có sự khác biệt lớn giữa học kỹ năng và rèn luyện.
                Rèn luyện, trong hoàn cảnh này,
                có nghĩa là cải thiện một kỹ năng mà bạn đã học được thông qua việc lặp đi lặp lại kỹ năng đó.
            </p>
            <p>
                Đó là việc xảy ra sau khi bạn đã học được một kỹ năng cơ bản nếu bạn muốn tiếp tục tiến bộ.
            </p>
            <p>
                Lấy việc chạy việt dã làm ví dụ. Hầu hết chúng ta đều học được kỹ năng chạy từ khi còn nhỏ.
                Ngoài việc đặt chân này trước chân kia và chạy cho tới khi cán mốc 42 km, chẳng có kỹ năng nào mới cần phải học hỏi.
            </p>
            <p>
                Tuy nhiên, cần phải rất nỗ lực mới có thể tăng cường sức khỏe và cải thiện độ dẻo dai để hoàn thành phần chạy việt dã.
                Quá trình tăng cường và cải thiện đó chính là rèn luyện.
            </p>
            <p>
                Càng rèn luyện nhiều, bạn càng trở nên khỏe mạnh và càng sớm hoàn thành phần chạy việt dã.
            </p>
            <p>
                Liên quan tới chạy việt dã còn có một yếu tố nữa, đó là làm cách nào để đăng ký tham gia cuộc đua,
                làm thế nào để đủ tiêu chuẩn tham gia những sự kiện lớn.
            </p>
            <p>
                Chẳng hạn, một vấn đề nhỏ như ma sát giữa áo và da bạn sẽ không phải là vấn đề lớn nếu bạn chỉ chạy 5 km,
                nên hầu hết những người chạy đều không lăn tăn gì về vấn đề đó.
            </p>
            <p>
                Nhưng ma sát sẽ trở thành vấn đề lớn nếu bạn chạy khoảng 42 km.
            </p>
            <p>
                Rèn luyện và học hỏi chắc chắn sẽ giúp cho việc hoàn thành cuộc đua trở nên dễ dàng hơn,
                nhưng đó không phải là tiếp thu kỹ năng.
                Nếu không tiếp thu kỹ năng thì việc rèn luyện là điều không thể và chẳng có ích gì.
                Chuẩn bị và chăm sóc sức khỏe có thể khiến cho việc tiếp thu kỹ năng trở nên dễ dàng hơn,
                nhưng hai việc đó không thể thay thế được việc rèn luyện.
            </p>
            <p>
                Tuy nhiên, học lại cách chạy ở cấp độ cơ bản là tiếp thu kỹ năng. Những thủ thuật như chạy bộ khí công (Chirunning) giúp người chạy học được kỹ năng di chuyển theo cách tối thiểu hóa sức lực và tránh mất đà khi tiến về phía trước giữa các bước sải.
                Luyện tập một chút, người chạy có thể học được kỹ năng cốt lõi của việc chạy và điều này sẽ được củng cố khi rèn luyện sau này.
            </p>




      <Postmenu/>
        </div >

    )
}