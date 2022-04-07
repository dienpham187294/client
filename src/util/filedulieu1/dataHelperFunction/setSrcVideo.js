import $ from "jquery"
export default function setSrcVideo(srcVideo) {
    $("#getSrcVideo").text(srcVideo)
    $("#setSrcVideo")[0].click()
}