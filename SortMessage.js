function SortMessage(messCheck) {
    let a = messCheck.split(/[\s,?#!-()]+/)
    let b = a.toString();
    return b.split(",").join(" ").toLowerCase()
}
export default SortMessage