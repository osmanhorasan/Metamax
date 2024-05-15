import { Button, Flex } from '@chakra-ui/react'
import { ListItem } from './ListItem'
import { useContext } from 'react';
import { ListContext } from '../../../providers/list.provider';


export const List = () => {
    const { listData, setListData } = useContext(ListContext);
    return (

        <Flex wrap={'wrap'} justify={'space-between'} gap={10}>
            {listData.results.map((item: any, index: number) => (
                <ListItem key={index} item={item} />
            ))}
        </Flex>
    )
}

