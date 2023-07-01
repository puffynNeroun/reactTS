import React, {FC, useRef, useState} from "react";


const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }


    return (
        <div>
            <input
                placeholder="Управляемый"
                value={value}
                onChange={changeHandler}
                type="text"/>
            <input
                placeholder="Неуправляемый"
                ref={inputRef}
                type="text"/>
            <button onClick={clickHandler}>Push</button>
            <div draggable
                 onDrag={dragHandler}
                 style=
                     {
                         {
                             width: '200px',
                             height: '200px',
                             backgroundColor: 'blue',
                         }
                     }></div>

            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style=
                    {
                        {
                            width: '200px',
                            height: '200px',
                            backgroundColor: isDrag ? 'yellow' : 'blue',
                            marginTop: '20px'
                        }
                    }></div>
        </div>
    );
};

export default EventsExample;