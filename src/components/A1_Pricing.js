import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
import $ from "jquery"
import { Link } from 'react-router-dom';
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>



            {/* <a href="https://forms.gle/pVL7Dtgp2V9DXF6N8" target="_blank">
                <button
                    className="btn btn-outline-danger">
                    Đăng ký rèn luyện
                </button>
            </a> */}
            <div className="container px-4 py-5" >

                <h2 className="pb-2 border-bottom">Thống nhất góc nhìn về <i style={{ color: "blue" }}>mục tiêu, phương pháp, và tiến độ</i>!</h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                <div className="A1Pricing_div1">
                    <i>"Trước khi lên tàu, bạn nên biết rõ nó đi về đâu, đi như thế nào, bao lâu thì tới và quan trọng hơn cả là đích đến của bạn có trùng khớp hay không."</i>
                </div>
            </div>
            <div className="container px-4 py-1" >
                <h2 className="pb-2 border-bottom"> <i style={{ color: "blue" }}>I. Mục tiêu:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                <div className="A1Pricing_div1">
                    <i>
                        Mục tiêu là học viên dùng được tiếng anh trong thực tế trong thời gian ngắn. Nếu bạn muốn luyện thi, phần nhiều phương pháp này sẽ không phù hợp với bạn.
                    </i>
                </div>
            </div>

            <div className="container px-4 py-1" >
                <h2 className="border-bottom"> <i style={{ color: "blue" }}>II. Phương pháp học kỹ năng nhanh:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                <div className="A1Pricing_div1">
                    <p>
                        Trọng tâm của phương pháp là
                        chia nhỏ kỹ năng tiếng anh nghe nói thành những phần nhỏ nhất có thể,
                        xác định phần nào là quan trọng nhất, sau đó chú tâm luyện tập phần đó trước tiên.
                    </p>
                    <p>
                        Gồm 4 bước chính:
                    </p>
                    <p>
                        1. Chia nhỏ kỹ năng thành những phần kỹ năng nhỏ nhất có thể xử lý được;
                    </p>
                    <p>
                        2. Học những phần kỹ năng nhỏ nhất để có thể luyện tập theo cách thông minh và tự điều chỉnh trong suốt quá trình luyện tập;
                    </p>
                    <p>
                        3. Loại bỏ những rào cản về mặt sinh lý, tinh thần và tình cảm xuất hiện trong quá trình luyện tập;
                    </p>
                    <p>
                        4. Luyện tập phần kỹ năng quan trọng nhất trong vòng 90 tiếng là ít nhất.
                    </p>
                    <p>
                        Học kỹ năng nhanh không phải là môn khoa học thần tốc.
                        Chỉ đơn giản là bạn quyết định điều cần luyện tập, tìm ra cách tốt nhất để luyện tập,
                        dành thời gian để luyện tập, sau đó luyện tập cho tới khi bạn đạt được mục tiêu của mình.
                    </p>
                </div>
            </div>

            <div className="container px-4 py-1" >
                <h2 className="pb-2 border-bottom"> <i style={{ color: "blue" }}>III. Tiến độ:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                <i>Chúng ta không tính tiến độ theo thời gian hoặc số buổi học mà sẽ tính tiến độ theo số lần rèn luyện nghe và nói!</i>
                <div className="A1Pricing_div1">
                    Được chia làm 5 giai đoạn:
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    Giai đoạn 1
                                </td>
                                <td>
                                    Tổng quan
                                </td>
                                <td>
                                    Thống nhất góc nhìn về mục tiêu, phương pháp và thời gian.
                                </td>
                                <td>
                                    1 giờ
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Giai đoạn 2
                                </td>
                                <td>
                                    Học kỹ năng cơ bản
                                </td>
                                <td>
                                    Nắm khái niệm một cách vừa đủ.
                                </td>
                                <td>
                                    20 bài thực hành
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Giai đoạn 3
                                </td>
                                <td>
                                    Rèn kỹ năng nghe nói
                                </td>
                                <td>
                                    Nắm vững ngữ âm.
                                </td>
                                <td>
                                    20 bài thực hành
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Giai đoạn 4
                                </td>
                                <td>
                                    Rèn kỹ năng nghe hiểu
                                </td>
                                <td>
                                    Ghi nhớ từ vựng, mẫu câu.
                                </td>
                                <td>
                                    20 bài thực hành
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Giai đoạn 5
                                </td>
                                <td>
                                    Rèn kỹ năng mô tả, diễn đạt, nghe đoạn dài.
                                </td>
                                <td>
                                    Ứng dụng linh hoạt.
                                </td>
                                <td>
                                    20 bài thực hành
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <i>
                        Mục tiêu chung cuộc là giúp học viên có khả năng nghe và nói tiếng anh trong thực tế. Nếu bạn muốn học lấy bằng cấp, phần nhiều phương pháp này sẽ không phù hợp với bạn.
                    </i> */}

                </div>
            </div>
            {/* <a href="https://forms.gle/pVL7Dtgp2V9DXF6N8" target="_blank">
                <button
                    className="btn btn-outline-danger">
                    Đăng ký rèn luyện
                </button>
            </a> */}
            <Postmenu />
        </div >
    )
}