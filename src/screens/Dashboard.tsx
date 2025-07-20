import { Box, Center, Image, Text, VStack } from "@gluestack-ui/themed";
import BackgroundImg from "../assets/background.png";
import { InputItem } from "../components/Item";
import { Amount } from "../components/Amount";

export function Dashboard(){
    return(
        <VStack 
          flex={1} 
          bg="$gray600"
        >

          <Box 
            position="relative" 
            w="$full"
            h="$56"
          >
            <Image 
              source={BackgroundImg}
              alt="Imagem de fundo"
              w="$full"
              h="$56"
              position="absolute"
              zIndex={0}
            />
          
            <Center 
              w="$full" 
              h="$56"
              pr="$40"
              position="absolute"
              zIndex={1}
            >
              <Text
                fontFamily="$heading"
                fontSize="$2xl"
                c="$gray100"
              >
                 Lista de Compras
              </Text>
            </Center>

            <Box position="absolute" bottom="-$5" zIndex={2}>
              <InputItem />
            </Box>
          </Box>
          <Amount />
        </VStack>
    )
}