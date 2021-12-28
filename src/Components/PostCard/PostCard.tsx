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
    const date = ""
    const comment = ""
    const url = ""

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
                    <Li>
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
                            <IoIosShareAlt />
                        </Li>
                        <Li className="flex-fill text-center">
                            <AiOutlineRetweet />
                        </Li>
                        <Li className="flex-fill text-center">
                            <AiFillStar />
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
                            {url}
                        </CardText>
                    </div>
                    <div className="d-block w-100 text-right">
                        <A className="d-block cl-white mt-4" onClick={handleClick}>...Mas <MdKeyboardArrowDown /></A>
                    </div>
                </CardBlock>
            </Card>
        </div>
    )
}

export default PostCard 