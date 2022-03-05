export default function E_S_MOVE(data, Mark, setSTATUS, setData) {




    return (
        <div className="E_S_MOVE">
            <i><b>Move to where you should!</b></i>
            <hr />
            {S_data(data, Mark, setSTATUS, setData)}
        </div>
    )
}

function S_data(data, Mark, setSTATUS, setData) {

    try {
        return (
            <>
                {data.map((e, i) =>
                    <div
                        onClick={() => {
                            
                            if (Mark[e.id] !== undefined) {
                                setData(Mark[e.id].core)
                                setSTATUS(true)
                            }
                        }}
                        key={i}>
                        <img src={e.img} width="80px" height="80px" />
                        <i>{e.nameDepart}</i>
                    </div>
                )}
            </>
        )
    } catch (error) {
        return null
    }
}


