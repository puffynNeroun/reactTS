import {FC, ReactNode, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactNode;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         onClick,
         children
     }) => {

        const [state] = useState(0);

        return (
            <div>
                <div style=
                         {
                             {
                                 width,
                                 height,
                                 border: variant === CardVariant.outlined
                                     ? '1px solid black'
                                     : 'none',
                                 background: variant === CardVariant.primary ? 'teal'
                                     : ''
                             }
                         }
                     onClick={() => onClick(state)}>
                    {children}
                </div>
            </div>
        );
    };

export default Card;


// import * as React from "react";
//
// interface CardProps {
//     width?: string,
//     height?: string,
//     children?: React.ReactChild | React.ReactNode
// }
//
// const Card = ({width, height, children}: CardProps) => {
//     return (
//         <div style={{width, height, border: '1px solid black'}}>
//             {children}
//         </div>
//     );
// };
//
// export default Card;