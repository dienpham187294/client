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
                Tiếp thu kỹ năng với giáo dục và đào tạo
            </h1>
            <div>
                <button
                    onClick={() => { setSrcVideo("hhttps://www.youtube.com/embed/yoT5upm753c") }}
                    className="btn btn-outline-primary">Xem video</button>


            </div>
            <p>
                Bất chấp những nỗ lực cao thượng của các giáo viên và giáo sư trên khắp thế giới,
                những phương pháp giáo dục và đào tạo hiện đại lại chẳng có tác động gì tới việc tiếp thu kỹ năng.
            </p>
            <p>
                Tiếp thu kỹ năng đòi hỏi phải rèn luyện kỹ năng đó.
                Việc này yêu cầu phải có những giai đoạn chuyên tâm tập trung và kéo dài.
                Nó đòi hỏi tính sáng tạo, linh động và tự do để hình thành tiêu chuẩn thành công của bản thân bạn.
            </p>
            <p>
                Đáng tiếc là hầu hết phương pháp giáo dục và đào tạo hiện đại nhất chỉ yêu cầu việc tuân thủ đơn giản.
                Mục tiêu chính không phải là tiếp thu được những kỹ năng hữu ích,
                mà là để chứng thực việc hoàn thành bộ tiêu chuẩn tùy tiện nhất, được hình thành bởi những ủy ban tiêu chuẩn,
                vì mục tiêu thông qua một số phẩm chất nhất định mà một vài bên thứ ba nào đó có vẻ quan tâm.
            </p>
            <p>
                Sáng tạo, linh động và tự do thử nghiệm –
                các yếu tố quan trọng của việc tiếp thu kỹ năng nhanh – lại mâu thuẫn với quá trình đào tạo.
                Nếu các tiêu chuẩn quá linh động, thì chúng đã không phải là các tiêu chuẩn, đúng không nào?
            </p>
            <p>
                Đáng tiếc là giáo dục và đào tạo khắt khe có thể ngăn chặn đáng kể việc tiếp thu kỹ năng.
                Vấn đề chính là chi phí cơ hội: Nếu điều kiện cần thiết để được đào tạo lại khắt khe tới mức
                làm giảm khả năng dành thời gian rèn luyện kỹ năng theo yêu cầu,
                thì quá trình đào tạo đó lợi bất cập hại.
            </p>
            <p>
                Lấy một người thông minh, có động lực và quan tâm tới việc hình thành một công ty phần mềm làm ví dụ.
                Việc hoàn thành tấm bằng cử nhân về khoa học máy tính tại một trường đại học danh giá thường mất ít nhất bốn năm.
            </p>
            <p>
                Cuối giai đoạn bốn năm, anh chàng sinh viên mới tốt nghiệp này đã bỏ ra hàng nghìn giờ học thuật toán
                và phân tích các trình biên dịch để vượt qua hàng chục kỳ thi,
                nhưng vẫn không hề gần mục tiêu thành lập công ty phần mềm của mình.
                Anh chàng sinh viên đáng thương này của chúng ta đã ghi nhớ được rất nhiều thứ về lập trình máy tính, ít nhất là tạm thời,
                nhưng vẫn không biết làm thế nào để tạo ra được một chương trình máy tính mà mọi người thấy hữu dụng, đáng mua.
            </p>
            <p>
                Việc hình thành một công ty phần mềm đòi hỏi phải tiếp thu những kỹ năng mới:
                học ngôn ngữ lập trình, thiết lập và duy trì hệ thống máy tính,
                tìm kiếm các công cụ và chương trình sẵn có, tạo mẫu thử nghiệm, tìm kiếm người sử dụng ban đầu,
                tìm nguồn tài trợ cần thiết và xử lý những nhiệm vụ hành chính doanh nghiệp thông thường.
            </p>
            <p>
                Có sự chồng chéo nào giữa việc hình thành một doanh nghiệp
                và việc có được một chứng chỉ giáo dục không?
                Chắc chắn là có.
                Nhưng cần phải lưu ý là: Hầu hết nỗ lực của việc có được
                chứng chỉ đều được dành cho quá trình đáp ứng các yêu cầu.
                Liệu những yêu cầu đó có giúp bạn đạt được những kỹ năng cần có để
                tồn tại được trong thế giới thực hay không lại là mối quan tâm thứ ba.
            </p>
            <div className="A1Pricing_div1">
                <i>" Nếu bạn muốn làm tốt bất cứ việc gì coi trọng biểu hiện thực tế, thì bạn cần phải rèn luyện kỹ năng đó trong bối cảnh thực tế.
                    Chỉ học thôi thì không bao giờ đủ."</i>
            </div>



       <Postmenu/>
        </div >

    )
}