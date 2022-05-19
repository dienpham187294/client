// import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
// import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
// import $ from "jquery"
import { Link } from 'react-router-dom';
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>


            <h1 style={{ color: "blue" }}>
                Cùng bắt đầu hành trình rèn luyện kỹ năng tiếng anh nghe – nói trong 90 bài thực hành!
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/4pkvr85Alfc") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <div className="A1Pricing_div1">
                <i>
                    “Tôi nhận ra rằng trở thành bậc thầy về karate không phải là học 4.000 thế
                    mà là thực hiện một số thế 4.000 lần.”
                </i>
            </div>
            <h5>
                Bước 1: Xác định kỹ năng cấu thành quan trọng nhất.
            </h5>
            <p>
                1.	Cấu thành quan trọng nhất trong nghe nói là <b>ngữ âm</b>.
                <br />
                Bao gồm 3 kỹ năng nhỏ:
                <br />
                a.	Xác định nguyên âm đơn chính và cách phát âm.
                <br />
                b.	Xác định một từ có bao nhiêu âm.
                <br />
                c.	Ghép âm theo phiên âm một cách có logic.
                <br />
                2.	Cấu thành quan trọng thứ 2 là 1000 từ thường xuyên sử dụng nhất.
                <br />
                3.	Cấu thành quan trọng thứ 3 là cấu trúc một câu cơ bản trong tiếng anh.
            </p>
            <h5>
                Bước 2: Học vừa đủ để có thể tự biên tập, tự sửa chửa trong quá trình luyện tập.
            </h5>
            <p>
                Chúng ta cần lần lượt học vừa đủ những kiến thức sau.
                <br />
                1.	Xác định nguyên âm đơn chính và cách phát âm.
            </p>
            <table className="table">
                <tbody>
                    <tr>
                        <td>U</td>
                        <td>E</td>
                        <td>O</td>
                        <td>A</td>
                        <td>I</td>
                        <td>Ơ</td>
                    </tr>
                    <tr>
                        <td>
                            /ʊ /
                            <br />
                            /u:/
                        </td>
                        <td>
                            /e /
                        </td>
                        <td>
                            /ɒ /
                            <br />
                            /ɔ:/
                        </td>
                        <td>
                            /æ/
                            <br />
                            /ʌ /
                            <br />
                            /ɑ:/
                        </td>
                        <td>
                            /ɪ/
                            <br />
                            /i:/
                        </td>
                        <td>
                            /ə /
                            <br />
                            /ɜ:/
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>Bài rèn luyện 1: Xác định nguyên âm đơn chính của 1000 từ vựng được sử dụng thường xuyên nhất trong tiếng anh.</b>
                <br />
                *Bảng 1000 từ vựng thường dụng nhất ở phần cuối.
            </p>
            <h5>
                2.	Học cách đếm âm và ghép âm
            </h5>
            <p>
                <b>
                    Rèn luyện 2: Xác định 1000 từ vựng thường sử dụng có bao nhiêu âm.
                    <br />
                    Rèn luyện 3: Luyện tập ghép âm với 1000 từ vựng thường dùng nhất.
                </b>
            </p>
            <h5>
                3. Học 10 cấu trúc câu cơ bản nhất trong ngữ pháp tiếng Anh.
            </h5>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            Cấu trúc
                        </td>
                        <td>
                            Ví dụ
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + V
                        </td>
                        <td>
                            – I ran. (Tôi chạy.)
                            <br />
                            – The boy sits. (Cậu bé ngồi.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + V + O
                        </td>
                        <td>
                            – I love apples. (Tôi thích táo.)
                            <br />
                            – Nam pets the cat. (Nam vuốt ve con mèo.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + V + Adv
                        </td>
                        <td>
                            – An read fast. (An đọc nhanh.)
                            <br />
                            – The woman eats slowly. (Người phụ nữ ăn chậm chạp.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + V + O + Adv
                        </td>
                        <td>
                            – Lam kicks the ball hard. (Lâm đá mạnh vào quả bóng.)
                            <br />
                            – She sang her song out loud. (Cô ấy hát lớn bài hát của chính mình.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + V + Adj
                        </td>
                        <td>
                            – She looks pretty. (Cô ấy trông thật xinh.)
                            <br />
                            – The song sounds boring. (Bài hát nghe chán thật.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + be + N
                        </td>
                        <td>
                            – Huy is a doctor. (Huy là bác sĩ.)
                            <br />
                            – They are brothers. (Họ là anh em.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + be + Adj
                        </td>
                        <td>
                            – I am lonely. (Tôi cô đơn.)
                            <br />
                            – She was hungry. (Cô ấy đói bụng.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            S + be + Adv
                        </td>
                        <td>
                            – Water is everywhere. (Nước ở khắp mọi nơi.)
                            <br />
                            – The pen is nowhere. (Cái bút mất tích rồi.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            V (+ O)
                        </td>
                        <td>
                            – Eat. (Ăn đi.)
                            <br />
                            – Close the door. (Đóng cửa lại.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            V (+ O) + Adv
                        </td>
                        <td>
                            – Speak slowly. (Nói chậm thôi.)
                            <br />
                            – Hold my hand tight. (Nắm chặt lấy tay tôi.)
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>Bài rèn luyện 4: Luyện nói 1000 câu cơ bản.</b>
            </p>
            <h5>
                Bước 3: Loại bỏ những rào cản để luyện tập
            </h5>
            Có rất nhiều thứ có thể cản trở việc luyện tập của bạn, khiến cho việc học bất kỳ kỹ năng nào cũng trở nên khó khăn hơn nhiều. Những rào cản này có thể là:
            <br />
            1. Nỗ lực luyện tập trước. Chẳng hạn như sử dụng công cụ không đúng chỗ, không tìm được đúng công cụ trước khi luyện tập, hoặc bỏ qua việc xây dựng các điều kiện cần thiết.
            <br />
            2. Sử dụng nguồn gián đoạn, ngắt quãng. Chẳng hạn như sử dụng thiết bị đi mượn hoặc phụ thuộc vào nguồn có thời gian vận hành hạn chế.
            <br />
            3. Những điều gây xao lãng. Chẳng hạn như ti vi, điện thoại kêu, email đến.
            <br />
            4. Rào cản tâm lý. Chẳng hạn như sợ hãi, nghi ngờ và xấu hổ.
            <br />
            Mỗi một yếu tố này đều có thể khiến cho việc bắt đầu luyện tập khó khăn hơn, và từ đó giảm tốc độ học hỏi của bạn.
            <br />
            Dựa vào sức mạnh tinh thần để vượt qua những rào cản này là một chiến lược chắc chắn thất bại. Chúng ta có rất nhiều sức mạnh tinh thần để có thể sử dụng mỗi ngày, và sẽ là tốt nhất nếu sử dụng sức mạnh tinh thần đó một cách thông minh.
            <br />
            Cách tốt nhất để đầu tư sức mạnh tinh thần vào việc hỗ trợ việc tiếp thu kỹ năng là sử dụng nó để loại bỏ những rào cản nhẹ nhàng đối với việc luyện tập. Bằng cách sắp xếp lại môi trường của bạn để khiến cho việc bắt đầu luyện tập dễ dàng nhất có thể, bạn sẽ học được kỹ năng trong khoảng thời gian ít hơn rất nhiều.
            <h5>
                Bước 4: Sau khi mọi chuyện đã sẵn sàng việc còn lại là Luyện tập liên tục và đều đặn 90 bài trong 90 ngày.
            </h5>
            <div className="A1Pricing_div1">
                <i>
                    “Giải pháp chỉ chiếm 1% - 99% còn lại chính là sự cam kết rèn luyện của bạn. Sự nỗ lực, cam kết của bạn sẽ được đền đáp bằng phần thưởng mà bạn mong muốn!”
                </i>
            </div>
            Lưu ý:
            <br />
            <b>1.	Vòng phản hồi nhanh</b>
            <br />
            Trong quá trình luyện tập nghe nói tại Englishtool.co vòng phản hồi là ngay lập tức. Rất dễ dàng để kết nối thông tin đó với hành động của bạn và đưa ra những điều chỉnh thích hợp.

            <div className="A1Pricing_div1">
                <i>
                    “ Làm – ghi nhận phản hồi – chỉnh sửa và làm tiếp.”
                </i>
            </div>

            <br />
            Nguồn phản hồi nhanh mà bạn tích hợp vào quá trình luyện tập của bạn càng nhiều thì bạn càng nhanh học được kỹ năng.
            <br />
            <b>2.	Nhấn mạnh số lượng và tốc độ</b>
            <br />
            Khi bắt đầu học một kỹ năng mới, bạn sẽ bị thôi thúc phải tập trung vào việc luyện tập thật hoàn hảo – đây chính là công thức tạo ra sự thất vọng. Tất nhiên là biểu hiện của bạn sẽ chẳng thể nào gần tới mức hoàn hảo được.
            <br />
            Thay vì cố gắng trở nên hoàn hảo, hãy tập trung vào việc luyện tập càng nhiều, càng nhanh càng tốt, trong khi vẫn duy trì được mức độ “đủ tốt”.


         <Postmenu />
        </div >

    )
}