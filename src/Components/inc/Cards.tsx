import React from 'react'
import styled from 'styled-components'
import { classNames } from '../../utils/classes'
import { Card } from '@bootstrap-styled/v4'
import { omit } from 'ramda'

// type definition
export type CardEntityProps = {
    className?: string
} & React.ComponentProps<typeof Card>


const CardEntity = styled(
    (attrs: CardEntityProps): JSX.Element => <Card {...omit(['state'], attrs)} />
).attrs(props => ({
    className: classNames(props.className)
}))`
    &&.card-data {
        width: 55%;
        margin: -3px auto 15px;
        background-color: #00CED1;
        color: #FFFF;
        min-width: 325px;
        border: 0px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        
        .card {
            &-block {
                border-top: 0px solid transparent;
                padding: 12px;
                padding-top: 55px;
                transition: height 1s ease;
            }
            &-title {
                color: #FFFFFF;
                border-top: 1px solid #FFFFFF;
                padding: 0.5rem;
            }
            &-text {
                color: #FFFFFF;
                border-top: 1px solid #FFFFFF;
                padding-top: 15px;
            }
        }
        .expanded {
            height: 51px;
            padding-top: 0px;
            transition: height 1s ease;
        }
        .collapset {
            height: 100%;
            transition: height 1s ease;
        }
        .cl-white {
            color: #FFFFFF;
        }
    }
    && {
        border: 1px solid #DCDCDC;
        box-shadow: 0px 3px 7px 0px #DCDCDC;
        min-width: 350px;
        border-bottom: 0px;
        /* margin-bottom: 15px; */
        ul { 
            list-style-type: none;
            padding: 0; 
            margin: 0;
        }
        img { 
            width: 50px;
            height: 50px;
            margin: 12px;
        }
        .card{
            &-title {
                color: #808080; 
                margin-bottom: 0.3rem;
            }
            &-subtitle { 
                color: #C0C0C0; 
            }
            &-block { 
                padding: 10px 0;
                margin: 0 10px;
                border-top: 1px solid #C0C0C0;
            }
            &-text{
                margin: 0;
                color: #808080;
                font-size: 15px;
            }
            &-icon {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                span { 
                    background-color: #00CED1;
                    width: 100px;
                    height: 91px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    margin: -45px;
                    z-index: 1;
                }
            }
        }
    }
`
export default CardEntity
