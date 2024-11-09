import { useState } from "react"

const Folder = ({ data }) => {
    console.log("adata", data)

    const [isExpand, setIsExpand] = useState(false)

    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div style={{  cursor: 'pointer' }}>
                            {item.isFolder && <div onClick={() => setIsExpand(p => !p)}>{isExpand ? <button>C</button> : <button>E</button>}</div>}
                            <div style={{  }}>{item.name}</div>
                            {item.isFolder && <Folder data={item.children} />}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Folder;