import React from 'react'
import { 
    Box ,
    Text,Image
} from '@chakra-ui/react'
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import telegram from '../Assets/telegram.png';
import linkdin from '../Assets/linkdin.png';
const Footer = () => {
  return (
    <Box minHeight="7rem" padding="5rem 1rem" backgroundColor= "rgb(34,193,195)" overflow="auto"  background="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(17,18,48,1) 78%)" marginTop={"2rem"} >
        <Text width="80%" margin="auto" marginBottom="1rem" color="white" fontWeight="500" textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque necessitatibus dignissimos cupiditate minus quisquam vero nostrum sunt eveniet, veritatis itaque explicabo, voluptatum nemo ex maiores saepe nobis voluptatem adipisci voluptate. Dolor voluptas maiores repellendus dolorem! Corrupti vitae dolore sed repellat magnam rerum, error distinctio molestiae maiores aliquid vel, minima odio. Eaque eum molestiae sit enim voluptates unde suscipit vitae, blanditiis commodi et pariatur culpa quas exercitationem nostrum ex amet. Esse ea facilis dicta qui.</Text>
        <Box display="flex" margin="auto" height="1.5rem"  width="10rem" justifyContent="space-between">
            <Image width="2.3rem" height="2.3rem"  src={facebook}  alt="icon" />
            <Image width="2.2rem" height="2.2rem" src={instagram} alt="icon"/>
            <Image width="2rem" height="2rem" src={telegram} alt="icon"/>
            <Image width="2rem" height="2rem" src={linkdin} alt="icon"/>
        </Box>
    </Box>
  )
}

export default Footer
