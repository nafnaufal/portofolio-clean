import { Text, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'


export default function ProjectItem(props) {
	let align_title = 'left'
	let align_tags = 'left'
	let bg = '#E8F9FD'
	let color = '#000000'
	let p = 0
	let m = 0

	if (props.sel === props.pos){
		bg = '#000000'
		color = '#E8F9FD'
		p = 2
	}
	
	return (
		<Flex flexDirection={"column"} height={'100%'} mr={m} justifyContent={"start"} p={p} bg={bg} color={color} css={css`
							transition: background-color 0.3s, color 0.3s, padding 0.3s;
							&:hover{
								background-color: #000000;
								color: #E8F9FD;
								padding: 8px;
								}
							`}>
			<Text textAlign={align_title}>{props.project.title}</Text>
			<Text fontSize='xs' textAlign={align_tags} css={css`
				overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; /* number of lines to show */
						line-clamp: 2;
				`} letterSpacing={'0.1'}>{props.project.tags}</Text>
		</Flex>
	)
}