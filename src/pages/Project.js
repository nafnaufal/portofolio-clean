import { Grid, GridItem, Heading, Flex, Image, Text, Box } from '@chakra-ui/react'
import { BsBoxArrowUpRight } from "react-icons/bs";
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
			templateColumns='repeat(12, 1fr)'
			gap={1}
			bg={'#E8F9FD'}
			color={'#000000'}
			pb={'16'}
			pl={'8'}
			textTransform={'lowercase'}
		>
			<GridItem className='title' rowSpan={14} colSpan={2} mb="4">
				<Flex height={'100%'} justifyContent={"end"} alignItems={'end'} color={"#FF1E00"}>
					<Heading size='4xl' textAlign="right" lineHeight={'1'} textTransform={'uppercase'} css={css`
						writing-mode:vertical-lr;
						`} transform={"rotate(180deg)"} >naufal</Heading>
					<Heading size='4xl' textAlign="left" lineHeight={'1.5'} textTransform={'uppercase'} css={css`
						writing-mode:vertical-lr;
						`} transform={"rotate(180deg)"} bg={"#000000"} h={"100%"}>anbial falah</Heading>
				</Flex>
			</GridItem>

			<GridItem className='show-project' rowSpan={10} colSpan={6} >
				<Grid
					templateRows='repeat(10, 1fr)'
					templateColumns='repeat(6, 1fr)'
					height={"100%"}
					width={"100%"}
				>

					<GridItem className='show-project' rowSpan={2} colSpan={6} mx="4">
						<Flex flexDirection={"column"} height={'100%'} justifyContent={"end"}>
							<Text fontWeight={'bold'} textAlign={'end'}>sman 3 kerinci</Text>
							<Text textAlign={'end'}>profile website, company profile, laravel</Text>
						</Flex>
					</GridItem>

					<GridItem className='project-detail' bg={'#2F3645'} rowSpan={8} colSpan={6} m="4">
						<Flex flexDirection={"column"} height={'100%'} justifyContent={"center"}>
							<Image
								height={'100%'}
								width={'100%'}
								objectFit='cover'
								// src='https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/06/10_Protagonist-1.png'
								alt='Project 1'
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
				</Grid>
			</GridItem>

			<GridItem className='profile-detail' rowSpan={14} colSpan={2}>
				<Grid
					templateRows='repeat(14, 1fr)'
					templateColumns='repeat(1, 1fr)'
					height={"100%"}
					width={"100%"}
				>
					<GridItem rowSpan={2} >
						<Flex flexDirection={"column"} width={"100%"} height={'100%'} justifyContent={"end"} alignItems={"start"}>
							<a href='https://google.com'>
							<BsBoxArrowUpRight fontSize={"sm"} />
							</a>
							{/* <Box  /> */}
						</Flex>
					</GridItem>
					<GridItem rowSpan={12} colSpan={6} my="4">
						<Flex flexDirection={"column"} height={'100%'} justifyContent={"start"} alignItems={"end"} fontSize='sm'>
							<Text textAlign={'justify'}>Elit laboris culpa sunt nostrud est. Laboris quis anim fugiat duis dolor tempor. Officia aliqua ut ea sunt dolor deserunt cupidatat deserunt do anim eiusmod. Ea nulla consequat duis excepteur non fugiat esse ex sit. Qui commodo consectetur do labore ex occaecat aute. Nulla aliquip consectetur elit exercitation veniam. Elit fugiat culpa adipisicing eiusmod pariatur sunt anim quis.</Text>
						</Flex>
					</GridItem>

				</Grid>
			</GridItem>
			<GridItem className='profile-detail' bg={''} rowSpan={14} colSpan={2} ml="4" mb="4" />
			{/* show swiss style box and circle when change */}
			{/* or parallax on box */}

			{data.map((item, i) => (
				<GridItem className='project-item' rowSpan={2} colSpan={2} px="4">
					<button onClick={() => setSel(i)}>
						<ProjectItem project={item} sel={sel} pos={i} len={data.length} />
					</button>
				</GridItem>
			))}

		</Grid>
	);
}

export default Project;
