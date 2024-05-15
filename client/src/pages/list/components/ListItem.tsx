import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Image, Link, Stack, Tag, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'
import { TbRosetteDiscount } from "react-icons/tb";
import { FiPieChart } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import moment from 'moment';
interface IListItem {
    item: any
}
export const ListItem: React.FC<IListItem> = ({ item }) => {
    function formatNumber(number: number) {
        const parts = number.toString().split('.');
        const integerPart = parseInt(parts[0].replace(/\D/g, ''));
        const formattedIntegerPart = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `${formattedIntegerPart}`;
    }
    const createdAt = moment(item.launch.time);
    const now = moment();
    const differenceInMonths = Math.abs(now.month() - createdAt.month());
    return (
        <Card width={{
            base: '100%',
            md: '50%',
            lg: '30%',
        }}
            borderRadius='lg'
            overflow={'hidden'}
        >
            <Link _hover={{ textDecoration: 'none' }} href={'/list/1'}>

                <CardHeader p={0}>
                    <Image
                        src={item.asset.medias[0].url}
                        alt='Green double couch with wooden legs'
                        aspectRatio={'3/2'}
                    />
                    {
                        item.discounts ? <Tag position={'absolute' as const} top={0} left={0} bg='yellow.400' color='black' rounded='full' px={2} py={2} borderRadius={'0px 0px 10px 0px'}>
                            <Flex align={'center'} gap={2}>
                                <TbRosetteDiscount />
                                <TagLabel fontSize={'smaller'}>
                                    Toplu Alımlarda %10 İndirim Fırsatı!
                                </TagLabel>
                            </Flex>
                        </Tag> : <></>
                    }
                    <Image position={'absolute' as const} top={5} right={5}
                        src='https://metamax.com.tr/static/media/refund_badge.414511ae7cf1b00e5e24.png'
                        w={'64px'}
                        h={'68px'}
                    />
                </CardHeader>
                <CardBody>
                    <Flex align={'center'} direction={'column'} gap={4}>
                        <Text fontSize={'2xl'} fontWeight={'bold'} noOfLines={1} >
                            {item.name}
                        </Text>
                        <Flex align={'center'} gap={2} justify={'space-between'} w={'full'}>
                            <Flex align={'center'} gap={2}>
                                <FiPieChart size={36} />
                                <Text fontSize={'lg'} color={'yellow.400'} fontWeight={'bold'}>
                                    {item.quoteCurrency === 'TRY' ? '₺' : item.quoteCurrency}
                                    {formatNumber(item.promotion.currentAmount)}
                                </Text>
                            </Flex>
                            <Flex align={'center'} gap={2}>
                                <IoTimeOutline size={36} />
                                <Text fontSize={'lg'} color={'yellow.400'} fontWeight={'bold'}>
                                    {differenceInMonths}
                                </Text>
                            </Flex>
                            <Flex align={'center'} gap={2}>
                                <IoPersonOutline size={36} />
                                <Text fontSize={'lg'} color={'yellow.400'} fontWeight={'bold'}>
                                    {item.summary.investorCount}
                                </Text>
                            </Flex>

                        </Flex>
                    </Flex>
                </CardBody>
                <Divider color={'gray.300'} />
                <CardFooter>
                    <Text fontSize={'2xl'} fontWeight={'bold'}>
                        ₺{item.launch.sellOrderPrice}
                    </Text>
                </CardFooter>
            </Link >
        </Card >
    )
}
