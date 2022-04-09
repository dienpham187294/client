import ReadMessage from "../../../Read/ReadMessage"

export default function GuildRead(data, setData) {

    try {
        return (
            <div className="GuildRead">
                <hr />
                {showRRR(data, setData)}

            </div>
        )
    } catch (error) {
        return null
    }
}

function showRRR(data, setData) {
    try {
        return (
            <div>
                {data.says.map((e, i) =>
                    <div
                        className="GuildRead_I"
                        onClick={() => {
                            ReadMessage(e, data.readIndex[0], data.readIndex[1], data.readIndex[2])
                        }}
                        key={i}><i>line </i>{i}</div>
                )}
                <div
                    className="GuildRead_I"
                    onClick={() => setData(null)}
                >
                    D!
                </div>
            </div>
        )
    } catch (error) {
        return null
    }
}