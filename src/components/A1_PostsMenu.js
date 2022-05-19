// import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
// import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
import $ from "jquery"
import { Link } from 'react-router-dom';
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
export default function A1Pricing() {



    return (
        <div>
            <div className="container px-4 py-1" >
                <h2 className="pb-2 border-bottom"> <i style={{ color: "blue" }}>Bài viết nên đọc:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
          
                <div className="A1Pricing_div1" onClick={() => {
                    // alert(1)
                    $('#top1').animate({
                        scrollTop: $("#topD").offset().top
                    }, 500)
                }}>
                    <ul>

                        <li>
                            <Link to={'/posts-1'}>
                                1. Tôi rất muốn học tiếng anh … nhưng lại có quá ít thời gian.
                            </Link>
                        </li>

                        <li>
                            <Link to={'/posts-2'}>
                                2. Chúng ta có quá nhiều thứ cần học – trong khi có quá ít thời gian.
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-3'}>
                                3.  Học kỹ năng nhanh chóng dứt khoát – Đũa phép thần kỳ?
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-4'}>
                                4.  Nói tiếng anh như gió?
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-6'}>
                                5.  Học kỹ năng so với việc học bình thường!
                            </Link>
                        </li>

                        <li>
                            <Link to={'/posts-7'}>
                                6.  Giá trị đích thực của việc học.
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-8'}>
                                7.   Học kỹ năng với rèn luyện.
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-9'}>
                                8.  Tiếp thu kỹ năng với giáo dục và đào tạo.
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-10'}>
                                9.  Sinh lý thần kinh về kỹ năng: Tính mềm dẻo của não bộ và bộ nhớ cơ bắp
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-11'}>
                                10.   Cùng bắt đầu hành trình rèn luyện kỹ năng tiếng anh nghe – nói trong 90 bài thực hành!
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-12'}>
                                11.    1000 từ vựng thường được sử dụng nhất.
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts-13'}>
                                12.   1000 câu với từ vựng thường được sử dụng nhất.
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >

    )
}