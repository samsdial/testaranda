import { useState,Fragment } from 'react'
import { InputGroup, InputGroupAddon, Col, Input, Row, H5 } from '@bootstrap-styled/v4'
import PostCard from './PostCard/PostCard';
import './PostFilter.sass'

import { BiSearchAlt } from 'react-icons/bi';



interface PostFilterProps  {
    items: any[];
}

const PostFilter: React.FC<PostFilterProps> = ({items}) => {
    const [searchTwit, setSearchTwit] = useState<string>('');
    const [data, setData] = useState<any[]>(items);
    
    // exclude column list from filter
    const excludeColumns = ["id"];

    const handleChange = (value:any): void => {
        //console.log('event target value', event.target.value)
        const targetValue = value
        console.log('target value', targetValue)
        setSearchTwit(targetValue)
        filterData(targetValue)
    }
    
    const filterData = (value: any): void => {
        const lowerCasedValue = value.toLowerCase().trim();
        if (lowerCasedValue === "") setData(items);
        else {
            const filteredData = items.filter(item => {
                return (Object.keys(item) as Array<keyof typeof item>).some((key: any) =>
                excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCasedValue)
                );
            });
            setData(filteredData);
        }
        
    }
    return (
        <Fragment>
            <Row>
                <Col xs={12} className="mb-5">
                    <div className="d-flex align-items-center">
                    <H5 className="mb-0 mr-5">Buscar Twit:</H5>
                    <InputGroup className="w-75 group-search">
                        <Input className="group-search-input" type="text" placeholder="Buscar..." value={searchTwit} onChange={e => handleChange(e.target.value)}/>
                        <InputGroupAddon className="group-search-addon">
                            <BiSearchAlt />
                        </InputGroupAddon>
                    </InputGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                {data.map((item) => (
                    <Col md={6} lg={4} className="mb-5" key={item.id}>
                        <PostCard key={item.id} post={item} />
                    </Col>
                ))}
            </Row> 
            {data.length === 0 && <span>Al parecer, no hay buenas coincidencias para tu búsqueda!</span>}
        </Fragment>
    )
}

export default PostFilter