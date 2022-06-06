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
                        Mục tiêu là đạt kỹ năng nghe - nói tiếng anh bằng cách nghe - nói càng nhiều càng tốt thông qua các trò chơi ứng dụng trí tuệ nhân tạo (AI) nhận diện giọng nói. Nếu hoàn thành 100 trò chơi, người thực hành sẽ nghe - nói trên 20.000 lần.
                    </i>
                </div>
            </div>

            <div className="container px-4 py-1" >
                <h2 className="border-bottom"> <i style={{ color: "blue" }}>II. Phương pháp:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                <div className="A1Pricing_div1">

                    <p>
                        1. Chia nhỏ kỹ năng thành những phần kỹ năng nhỏ nhất có thể xử lý được gồm: ghép - tách âm, 1000 từ vựng cơ bản, cấu trúc câu cơ bản;
                    </p>
                    <p>
                        2. Học những phần kỹ năng trên để có thể luyện tập theo cách thông minh và tự điều chỉnh trong suốt quá trình luyện tập;
                    </p>
                    <p>
                        3. Loại bỏ những rào cản về mặt sinh lý, tinh thần và tình cảm xuất hiện trong quá trình luyện tập;
                    </p>
                    <p>
                        4. Luyện tập liên tục và đều đặn hết 100 bài.
                    </p>
                    {/* <p>
                        Học kỹ năng nhanh không phải là môn khoa học thần tốc.
                        Chỉ đơn giản là bạn quyết định điều cần luyện tập, tìm ra cách tốt nhất để luyện tập,
                        dành thời gian để luyện tập, sau đó luyện tập cho tới khi bạn đạt được mục tiêu của mình.
                    </p> */}
                </div>
            </div>

            <div className="container px-4 py-1" >
                <h2 className="pb-2 border-bottom"> <i style={{ color: "blue" }}>III. Tiến độ:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                <i>Tiến độ được chia theo số lượng lần nghe - nói thực hiện!</i>
                <div className="A1Pricing_div1">
                    Được chia làm 5 giai đoạn:
                    <table className="table table-sm">
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Tổng quan: Thống nhất góc nhìn về mục tiêu, phương pháp và thời gian.
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Học kiến thức về kỹ năng ghép - tách âm. (20 bài - Học và thực hành xen kẽ với các bài giai đoạn 3)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Rèn luyện nghe và nói dựa trên tách - ghép âm. (30 bài - Chú trọng nghe và đoán, không học thuộc.)
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    Bổ sung từ vựng, câu. (30 bài - Chú trọng thuộc nhiều từ vựng.)
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    Nghe và diễn đạt các đoạn dài, phức tạp như mô tả, giải thích, hướng dẫn. (30 bài)
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <i>Công cụ học tập phải có là máy tính cá nhân (laptop hoặc PC)!</i>
                    {/* <i>
                        Mục tiêu chung cuộc là giúp học viên có khả năng nghe và nói tiếng anh trong thực tế. Nếu bạn muốn học lấy bằng cấp, phần nhiều phương pháp này sẽ không phù hợp với bạn.
                    </i> */}

                </div>
            </div>
            <div className="container px-4 py-1" >
                <h2 className="pb-2 border-bottom"> <i style={{ color: "blue" }}>IV. Chi phí:</i></h2>
                {/* <h5 style={{ color: "blue" }}> <b><i>Nhanh gọn - Dứt khoát!</i></b></h5> */}
                {/* <i>Tiến độ được chia theo số lượng lần nghe - nói thực hiện!</i> */}
                <div className="A1Pricing_div1">

                    <table className="table table-sm">
                        <tbody>
                            <tr>
                                <td>
                                    4tr/tháng.
                                </td>
                                <td>
                                    20 triệu / 6 tháng.
                                </td>
                                <td>
                                    35 triệu / 12 tháng.
                                </td>
                                <td>
                                    40 triệu / trọn gói 100 trò chơi.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Học thử 4 buổi.
                                    <br />
                                    Giáo viên hướng dẫn online 2 buổi / tuần.
                                    <br />
                                    Trò chơi thực hành mỗi ngày - thực hành mọi lúc - mọi nơi.
                                    <br />
                                    Hỗ trợ liên tục để vượt qua "rào cản thất vọng".
                                    <br />
                                    Tham gia các buổi offline với cộng đồng.
                                    <br/>
                                  
                                </td>
                                <td>

                                </td>

                            </tr>

                        </tbody>
                    </table>
                    <i>  Cam kết hoàn phí nếu không nhận được hiệu quả sau 50 bài thực hành.</i>
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