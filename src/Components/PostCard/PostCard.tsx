import { useState } from 'react'
import  Card from '../inc/Cards';
import { 
    CardImg,
    CardBlock,
    CardTitle,
    CardSubtitle,
    CardText,
    Ul,
    Li,
    A,
    H6,
  } from '@bootstrap-styled/v4';

import { classNames } from '../../utils/classes'
import { FaTwitter } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { AiOutlineRetweet, AiFillStar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import Post from '../../models/postModels'

interface PostProps {
    post: Post
}

const PostCard: React.FC<PostProps> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const { post : { id, title, body } } = props

    const img = "https://picsum.photos/200/300"
    const atSing = "Alterno"
    const hour = "22:00"
    const date = "28 Dic 2021"
    const comment = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nesciunt magnam rerum? A, quis perferendis!"
    const url = "https://www.google.com/"

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="item">
            <Card id={`card-${id}`}>
                <Ul className="d-flex flex-row align-items-center">
                    <Li> 
                        <CardImg src={img} className="img-fluid rounded" alt="card image"/>
                    </Li>
                    <Li className="py-2 pr-2">
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>@{atSing}</CardSubtitle>
                    </Li>
                </Ul>
                <CardBlock>
                    <CardText>
                        {body}
                    </CardText>
                </CardBlock>
                <CardBlock className="mb-5">
                    <Ul className="d-flex align-items-center">
                        <Li className="flex-fill text-center">
                            <A>
                                <IoIosShareAlt />
                            </A>
                        </Li>
                        <Li className="flex-fill text-center">
                            <A>
                                <AiOutlineRetweet />
                            </A>
                        </Li>
                        <Li className="flex-fill text-center">
                            <A>
                                <AiFillStar />
                            </A>
                        </Li>
                    </Ul>
                </CardBlock>
                <div className="card-icon">
                    <span>
                        <FaTwitter size="50px" color="white" />
                    </span>
                </div>

            </Card>
            <Card className="card-data"> 
                <CardBlock className={classNames(isOpen ? 'expanded' : 'collapset')}>
                    <div className={classNames(!isOpen ? ' ' : 'collapse')}>
                        <CardTitle tag={H6}>
                            {hour} - {date}
                        </CardTitle>
                        <CardText>
                            {comment}
                            <br />
                            <A className="link" href={url}>
                                {url}
                            </A>
                        </CardText>
                    </div>
                    <div className="d-block w-100 text-right">
                        <A className="d-block btn-more mt-4" onClick={handleClick}>
                            {isOpen ? (<span>...Mas <MdKeyboardArrowDown /></span>) : (<MdKeyboardArrowUp />)}
                            </A>
                    </div>
                </CardBlock>
            </Card>
        </div>
    )
}

export default PostCard 