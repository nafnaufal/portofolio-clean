import { Grid, GridItem, Heading, Flex, Image, Text, Button, Link } from '@chakra-ui/react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LiaLinkedinIn, LiaHackerrank, LiaGithub } from "react-icons/lia";
import { TbBrandLeetcode } from "react-icons/tb";
import { css } from '@emotion/react'
import project from '../data/data.json';

import ProjectItem from './components/ProjectItem';
import { useState } from 'react';

function Project() {

    // Color #EEEDEB #E6B9A6 #939185 #2F3645
    // Color red#FF1E00 teal#E8F9FD cyan#59CE8F black#000000
    // change color, too distracting
    let data = project

    const [sel, setSel] = useState(0)
    return (
        <Grid
            h='100vh'
            templateRows='repeat(14, 1fr)'
            templateColumns='repeat(10, 1fr)'
            gap={1}
            bg={'#EEEDEB'}
            color={'#000000'}
            py={'4'}
            px={'24'}
        >
            <GridItem className='title' rowSpan={2} colSpan={10} mb="4">
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex flexDirection={'column'} alignItems={'start'}>
                        <Link color={'#FF1E00'}>profile</Link>
                        <Link >project</Link>
                    </Flex>
                    <Text fontWeight={"bold"}>naufal anbial falah</Text>
                    <Flex flexDirection={'column'} alignItems={'end'}>
                        <Link >contact me!</Link>
                        <Flex flexDirection={'row'} >
                            <a href='https://www.linkedin.com/in/nafnaufal/	'><LiaLinkedinIn /></a>
                            <a href='https://github.com/nafnaufal'><LiaGithub /></a>
                            <a href='https://leetcode.com/u/nafnaufal/'><TbBrandLeetcode /></a>
                            <a href='https://www.hackerrank.com/profile/naufalanbial'><LiaHackerrank /></a>
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>

            <GridItem className='show-project' rowSpan={10} colSpan={8} >

                <Flex flexDirection={"column"} height={'100%'} justifyContent={"center"} border={"solid 1px"}>
                    <Image
                        height={'100%'}
                        width={'100%'}
                        objectFit='cover'
                        src={data[sel]["img"][0]}
                        alt={data[sel]["title"]}
                        css={css`
                                        filter: grayscale(100%);
                                        transition: filter 0.3s;
                                        &:hover {
                                            filter: none;
                                        }
                                    `}
                    />
                </Flex>
            </GridItem>

            <GridItem className='profile-detail' rowSpan={14} colSpan={2}>
                <Grid
                    templateRows='repeat(14, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    height={"100%"}
                    width={"100%"}
                >

                    <GridItem rowSpan={2} colSpan={1}>

                    </GridItem>
                    <GridItem rowSpan={8} colSpan={1} my="4">
                        <Flex flexDirection={"column"} height={'20%'} justifyContent={"start"} alignItems={"start"} fontSize='sm'>
                            <Flex flexDirection={"column"} justifyContent={"start"} >
                                <BsBoxArrowUpRight />
                                <Link href='https://chakra-ui.com' isExternal>
                                    {data[sel]["title"]}
                                </Link>
                            </Flex>
                            <Text textAlign={'left'} mb={'4'}>{data[sel]["tags"]}</Text>
                            <Text textAlign={'justify'}>{data[sel]["desc"]}</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </GridItem>
            {/* show swiss style box and circle when change */}
            {/* or parallax on box */}


            {data.map((item, i) => (
                <GridItem className='project-item' rowSpan={2} colSpan={2} px="4">
                    <Flex height={"100%"}>
                        <button onClick={() => setSel(i)} >
                            <ProjectItem project={item} sel={sel} pos={i} len={data.length} />
                        </button>
                    </Flex>
                </GridItem>
            ))}

        </Grid>
    );
}

export default Project;
