import React,{ useState } from "react";
export const Mycontext = React.createContext();

export const MyProvider =({children})=>{
    const [date,setDate] = useState("Sat 15,June");
    const [time,setTime] = useState("");
    const [typeConsult,setTypeConsult] = useState("Startup Consulting");
    const [longSession,setLongSession] = useState();

    const values = {
        date,setDate,time,setTime,typeConsult,setLongSession,longSession,setTypeConsult
    };

    return(
        <Mycontext.Provider value={values}>
    {children}
    </Mycontext.Provider>

    )

    




}

