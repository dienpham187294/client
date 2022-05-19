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
                Học kỹ năng so với việc học bình thường!
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/EHZKNARavb8") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Có một điều bạn nên biết: Học kỹ năng nhanh không có điểm gì chung với “học cách học” ở trường.
                Học thuật <b>gần như không có gì trùng</b> với học kỹ năng, chứ chưa nói tới việc nhanh chóng thành thạo kỹ năng đó.
            </p>
            <p>
                Tôi, và tất các các bạn bè mà tôi biết đều đã từng học ngoại ngữ.
                Trong nhiều năm liền, tuần nào chúng tôi cũng có lớp học.
                Đa số đều vượt mức trung bình. Điểm số của nhiều bạn còn rất cao.
            </p>
            <p>
                Tuy nhiên, sau nhường đấy năm học, số bạn có thể nói chuyện được với người nước ngoài thật sự là hạn chế.
            </p>
            <p>
                Tiến sỹ Stephen Krashen của Đại học Nam California là một chuyên gia trong lĩnh vực học ngoại ngữ thứ hai.
                Một trong những nhận định chính của Krashen là học hỏi, tiếp thu ngoại ngữ, hoàn toàn khác với học ngoại ngữ.
            </p>
            <p>
                Khi còn đi học, chúng ta đã học hàng nghìn từ vựng, chia động từ và quy tắc ngữ pháp.
                Chúng ta đã học tốt tới mức bài kiểm tra nào cũng đạt điểm rất cao.
            </p>
            <p>
                Tuy nhiên, những bài kiểm tra đó lại chẳng liên quan gì tới
                khả năng của chúng ta trong việc luyện tập kỹ năng nói tiếng Anh
                và hiểu được những gì người khác nói với tốc độ bình thường của họ.
                Nếu mục tiêu của chúng ta là có thể nói tiếng Anh trôi chảy,
                thì chỉ một vài tuần nỗ lực nói chuyện với người bản xứ chắc chắn sẽ đem lại
                kết quả tốt hơn nhiều so với nhiều năm học.
            </p>
            <p>
                Nhưng thời kỳ đó, nói được tiếng Anh trôi chảy lại không phải là mục tiêu của số đông mọi người.
                Chúng ta chỉ muốn qua được kỳ kiểm tra cuối cùng mà thôi.
            </p>
            <p>
                Ngược lại, nếu chúng ta thay vì tập trung vào điểm số trên lớp mà bắt tay vào luyện tập.
                Thay vì chia động từ, chúng ta hãy luyện tập điều thực sự quan trọng:
                Giao tiếp với người khác bằng tiếng Anh.
            </p>
            <p>
                Xét từ góc độ hiệu quả và giá trị lâu dài thì cách tiếp cận của thứ hai hơn hẳn cách của đầu tiên.
                Điều này không cần phải bàn cãi.
            </p>



         <Postmenu />
        </div >

    )
}