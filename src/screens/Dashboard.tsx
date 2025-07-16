import { Box, Center, Image, Text, VStack } from "@gluestack-ui/themed";
import BackgroundImg from "../assets/background.png"

export function Dashboard(){
    return(
        <VStack flex={1} bg="$gray600">

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
            />
          
            <Center 
              w="$full" 
              h="$56"
              pr="$40"
            >
              <Text
                fontFamily="$heading"
                fontSize="$2xl"
                c="$gray100"
              >
                 Lista de Compras
              </Text>
            </Center>
          </Box>
        </VStack>
    )
}