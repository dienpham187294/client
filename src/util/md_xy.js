import arrPosition from "./Dulieu_dataGame"

export default function Md_xy(x, y) {
    this.x = x;
    this.y = y;
}


Md_xy.prototype.set_xy = function (x, y) {

    this.x = x - x % 3;
    this.y = y - y % 3;

}

Md_xy.prototype.check_xy = function () {
    let arr = []
    arrPosition.forEach(e => {

        let status1 = this.x > e.position[0] && this.x < e.position[2]
        let status2 = this.y > e.position[1] && this.y < e.position[3]

        if (status1 && status2) { arr.push(e) }
    })


    return arr
}
