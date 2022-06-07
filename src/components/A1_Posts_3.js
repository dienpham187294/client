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
                Học kỹ năng nhanh chóng dứt khoát – Đũa phép thần kỳ?
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/2UPXqPUZdJA") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Thực sự thì chả có cây đũa phép nào ở đây cả.
            </p>
            <p>
                Học kỹ năng nghe nói tiếng anh nhanh chóng là một quá trình –
                một cách chia nhỏ kỹ năng tiếng anh nghe nói thành những phần nhỏ nhất có thể,
                xác định phần nào là quan trọng nhất, sau đó chú tâm luyện tập phần đó trước tiên. Chỉ đơn giản vậy thôi.
            </p>
            <p>
                Học kỹ năng nghe nói tiếng anh nhanh chóng có bốn bước chính:
            </p>
            <p>
                1.Chia nhỏ kỹ năng thành những phần kỹ năng nhỏ nhất có thể;
            </p>
            <p>
                2.Học những phần kỹ năng nhỏ nhất để có thể luyện tập theo cách thông minh và tự điều chỉnh trong suốt quá trình luyện tập;
            </p>
            <p>
                3.Loại bỏ những rào cản về mặt sinh lý, tinh thần và tình cảm xuất hiện trong quá trình luyện tập;
            </p>
            <p>
                4.Luyện tập phần kỹ năng quan trọng nhất trong vòng 90 tiếng là ít nhất.
            </p>
            <p>
                Học kỹ năng nhanh không phải là môn khoa học thần tốc.
                Chỉ đơn giản là bạn quyết định điều cần luyện tập, tìm ra cách tốt nhất để luyện tập,
                dành thời gian để luyện tập, sau đó luyện tập cho tới khi bạn đạt được mục tiêu của mình.
            </p>
            <div className="A1Pricing_div1">
                <i>"Chẳng có gì thần kỳ trong đó đâu – chỉ là sự nỗ lực thông minh, có chiến lược, được đầu tư."</i>
            </div>
            <p>
                Chẳng có gì thần kỳ trong đó đâu – chỉ là sự nỗ lực thông minh, có chiến lược, được đầu tư vào việc bạn quan tâm mà thôi.
                Chỉ cần chuẩn bị một chút, bạn sẽ có được kỹ năng một cách nhanh chóng, tốn ít công sức hơn.
            </p>
            <p>
                Nói như vậy không có nghĩa là kết quả sẽ có ngay lập tức.
                Khao khát muốn được thỏa mãn ngay lập tức chính là một
                trong những lý do chính khiến mọi người không học được kỹ năng mới một cách nhanh chóng.
            </p>
            <p>
                Thời gian bạn cần để học một kỹ năng mới chủ yếu phụ thuộc vào lượng thời gian tập trung
                mà bạn có thể đầu tư cho việc chủ động luyện tập và trải nghiệm thông minh,
                cũng như phụ thuộc vào mức độ thành thạo mà bạn mong muốn.
            </p>
            <p>
                Đừng kỳ vọng sẽ đạt được kết quả chỉ sau một đêm. Bạn chỉ nên kỳ vọng tổng thời gian bạn cần đầu tư cho
                việc học sẽ ít hơn so với khi bạn lao vào quá trình học mà không có chiến lược cụ thể.
            </p>


           <Postmenu/>
        </div >

    )
}