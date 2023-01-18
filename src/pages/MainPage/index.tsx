import React, {useRef, useState} from "react";
import {BaseModel} from "../../models/api/BaseModel";
import {WordsService} from "../../services/WordsService";

function MainPage() {
    const [show,setShow] = useState(false);
    const [words,setWords] = useState<BaseModel[]>([]);
    const [word,setWord]=useState('');
    const [loading,setLoading] = useState(false);
    const audio = new Audio(words[0]?.phonetics[1]?.audio);

    const formSubmit=(e: any)=>{
        setLoading(true)
        e.preventDefault();
        let dictionaryService=new WordsService()
        dictionaryService.getAll(word)
            .then(res=>{
                setWords(res)
            })

        setLoading(false)
        setShow(true);

    }

    return (
        <>
            <div>
                <div>
                    <h1>Dictionary</h1>
                    <form onSubmit={(e)=>formSubmit(e)}>
                        <div>
                            <input onChange={(e)=>setWord(e.target.value)}/>
                        </div>
                        {
                            word.length ? <button>x</button> : <span></span>
                        }

                    </form>
                    {
                        words.length ? <div>
                                <div >
                                    <div >
                                        <div>
                                            <h2>
                                                {words[0]?.word}
                                                <button>{words[0]?.phonetic}</button>
                                            </h2>
                                            <span>
                     {words[0]?.meanings.map((item) => {
                         return <>{item?.partOfSpeech}/ </>;
                     })}
                   </span>
                                        </div>
                                        <div>
                                            {show && (
                                                <button onClick={() => audio.play()}></button>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <h5>...</h5>
                                    <span>
                {words[1]?.meanings.map((item) =>

                {
                    return <>{item?.definitions[0].definition}/ </>;
                })}
                </span>
                                </div>
                            </div> :
                            <span>text...</span>
                    }
                </div>
            </div>
        </>
    )
}

export default MainPage;