// import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
// import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
// import $ from "jquery"
// import { Link } from 'react-router-dom';
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>
            <h1>Tôi rất muốn học tiếng anh … nhưng lại có quá ít thời gian.</h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("https://www.youtube.com/embed/tVewy1jeQfM") }}
                    className="btn btn-outline-primary">Xem video</button>
            </div>

            <p>Đó là chuyện thường thấy.</p>
            <p>Bạn muốn học tiếng anh? Vậy điều gì ngăn cản bạn bắt đầu?</p>
            <p>Thường là vì hai lý do: Thời gian và kỹ năng.</p>
            <p>Những trải nghiệm vui vẻ trong đời thường đòi hỏi phải có kỹ năng ở một cấp độ nào đó. </p>
            <p>Nhưng cần phải có thời gian và nỗ lực mới có được kỹ năng –
                mà thời gian thì chúng ta không có, còn nỗ lực lại là thứ chúng ta ngại gom góp.</p>
            <div className="A1Pricing_div1">
                <i>“Một ngày nào đó tôi sẽ học, khi tôi có thời gian”.</i>
            </div>
            <p>
                Một cách thành thật, ngồi xem youtube và lướt web bao giờ cũng dễ dàng hơn.
                Vì vậy đó chính là điều mà hầu hết chúng ta vẫn làm,
                và để cho khao khát của chúng ta vẫn mãi chỉ là những giấc mơ.
            </p>
            <p>
                Vẫn còn một sự thật không lấy gì làm dễ chịu, đó là:
                Có rất nhiều việc chẳng có gì thú vị cho tới khi chúng ta giỏi việc đó.
                Kỹ năng nào cũng có cái gọi là <b>rào cản thất vọng</b> – một giai đoạn bạn không thạo và đau đớn nhận ra sự thật đó.
            </p>
            <p>
                Và  ngay lập tức, một câu hỏi lớn đặt ra cho bạn:
            </p>
            <p>
                Tại sao tôi phải bắt đầu một việc mà tối biết là mình <b>sẽ không giỏi</b> việc đó chứ?
            </p>
            <p>
                Chẳng phải sẽ rất tuyệt nếu có thể thành thạo nghe nói tiếng anh mà không cần phải lo lắng nhiều sao?
                Làm sao để nhanh chóng vượt qua rào cản thất vọng, có thể chuyển tới phần thú vị?
            </p>
            <p>
                Làm sao để tốn ít thời gian cho việc bối rối và lúng túng, có thêm thời gian vui vẻ?
            </p>
            <p>
                Liệu có thể học được kỹ năng tiếng anh nghe nói theo cách tốn ít thời gian và công sức hơn không?
            </p>
            <div className="A1Pricing_div1">
                <i>Từ kinh nghiệm thực tế, xin trả lời là: <b style={{ color: "blue" }}>Có thể</b> .</i>
            </div>
            <p>
                Sẽ mất khoảng <b>90 giờ thực hành trong 90 ngày liên tục</b> để phá vỡ rào cản thất vọng:
                để đi từ mức <b>hoàn toàn không biết gì</b> về việc bạn đang cố gắng làm tới mức có thể <b>làm tốt</b> việc đó một cách đáng ngạc nhiên.
            </p>
            <p>
                Chỉ cần một chút nỗ lực tập trung, có chiến lược, bạn sẽ thấy mình nhanh chóng tiến bộ mà không thất vọng.
            </p>
           <Postmenu/>
        </div >

    )
}