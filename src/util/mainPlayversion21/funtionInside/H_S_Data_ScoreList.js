export default function H_S_Data_ScoreList(Data_ScoreList) {


    try {
        return (
            <>

                {Data_ScoreList.map((e, i) =>
                    <div key={i}>

                        <b>Điểm: {e.score} </b> ---
                        <b>Thời gian: {e.time}</b>
                        <br />
                        <i>{e.last} / {e.name}</i>
                    </div>
                )}
            </>
        )
    } catch (error) {
        return null
    }

}