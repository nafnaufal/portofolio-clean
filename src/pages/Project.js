import { Grid, GridItem, Heading, Flex, Image, Text, IconButton, Button, Spacer } from '@chakra-ui/react'
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
			bg={'#E8F9FD'}
			color={'#000000'}
			pb={'16'}
			pl={'8'}
			pr={'24'}
			textTransform={'lowercase'}
		>
			<GridItem className='title' rowSpan={14} colSpan={2} mb="4">
				<Flex height={'100%'} justifyContent={"end"} alignItems={'end'} color={"#FF1E00"}>
					<Heading size='4xl' textAlign="right" lineHeight={'1'} textTransform={'uppercase'} css={css`
						writing-mode:vertical-lr;
						`} transform={"rotate(180deg)"} color={"#000000"}>naufal</Heading>
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
						<Flex flexDirection={"row"} w={'100%'} h={'100%'} justifyContent={"end"} alignItems={"end"}>
							<a href='https://www.linkedin.com/in/nafnaufal/	'><IconButton css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline' aria-label='Linkedin' icon={<LiaLinkedinIn />} /></a>
							<a href='https://github.com/nafnaufal'><IconButton css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline' aria-label='Github' icon={<LiaGithub />} /></a>
							<a href='https://leetcode.com/u/nafnaufal/'><IconButton css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline' aria-label='Leetcode' icon={<TbBrandLeetcode />} /></a>
							<a href='https://www.hackerrank.com/profile/naufalanbial'><IconButton css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline' aria-label='Hackerrank' icon={<LiaHackerrank />} /></a>
						</Flex>

						{/* <Flex flexDirection={"row"} h={'100%'} justifyContent={"end"} alignItems={"end"}>
							<Flex flexDirection={"column"} height={'100%'} justifyContent={"end"} pr={"4"}>
								<Text fontWeight={'bold'} textAlign={'end'}>{data[sel]["title"]}</Text>
								<Text textAlign={'end'}>{data[sel]["tags"]}</Text>
							</Flex>

							<IconButton css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline' aria-label='Linkedin' icon={<BsBoxArrowUpRight />} />
						</Flex> */}
					</GridItem>

					<GridItem className='project-detail' bg={'#2F3645'} rowSpan={8} colSpan={6} m="4">
						<Flex flexDirection={"column"} height={'100%'} justifyContent={"center"}>
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
				</Grid>
			</GridItem>

			<GridItem className='profile-detail' rowSpan={14} colSpan={2}>
				<Grid
					templateRows='repeat(14, 1fr)'
					templateColumns='repeat(1, 1fr)'
					height={"100%"}
					width={"100%"}
				>

					<GridItem rowSpan={2} colSpan={1}>

						<Flex flexDirection={"row"} h={'100%'} w={'100%'} justifyContent={"start"} alignItems={"end"} >
							<Button css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline'>
								Profile
							</Button>
							<Button css={
								css`
									&:hover{
										background-color: #000000;
										color: #E8F9FD;
									}
								`
							} borderRadius={"0 0 0 0"} colorScheme='black' variant='outline'>
								Contact
							</Button>

						</Flex>
						{/* <Flex flexDirection={"column"} width={"100%"} height={'100%'} justifyContent={"end"} alignItems={"start"}>
						</Flex> */}
					</GridItem>
					<GridItem rowSpan={8} colSpan={1} my="4">
						<Flex flexDirection={"column"} height={'20%'} justifyContent={"start"} alignItems={"start"} fontSize='sm'>
							<Flex flexDirection={"row"} justifyContent={"start"} >
								<Text fontSize={"lg"} fontWeight={'bold'} textAlign={'left'} mr={"2"}>{data[sel]["title"]}</Text>
								<Flex flexDirection={"row"} alignItems={"center"} height={"100%"} >
									<BsBoxArrowUpRight />
								</Flex>
							</Flex>
							<Text textAlign={'left'} mb={'4'}>{data[sel]["tags"]}</Text>
							<Text textAlign={'justify'}>{data[sel]["desc"]}</Text>
						</Flex>
					</GridItem>
				</Grid>
			</GridItem>
			{/* <GridItem className='profile-detail' bg={''} rowSpan={14} colSpan={2} ml="4" mb="4" /> */}
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
