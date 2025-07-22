import { useState } from 'react';
import { Box, HStack, Input, InputField,  Text, VStack } from "@gluestack-ui/themed";
import {
  Menu,
  MenuItem,
  Button,
  ChevronDownIcon,
} from "@gluestack-ui/themed";


export function Amount(){
  const [selected, setSelected] = useState("UN.");


    return(
        <VStack 
          pl="$12"
          pt="$10"
        >
            <Text
              fontFamily="$body"
              fontSize="$xs"
              c="$gray200"
              pb="$2">
                Quantidade
            </Text>

            <HStack>

              <Input 
                variant="outline"
                w="$16"
                bg="$gray500"
                borderColor="$gray300"
                borderWidth={1}
                borderRightWidth={1}
                borderTopLeftRadius="$md"
                borderBottomLeftRadius="$md"
                borderTopRightRadius="$nome"
                borderBottomRightRadius="$nome"
              >
                  <InputField
                    fontFamily="$body"
                    c="$gray200"
                    keyboardType="number-pad"
                  />
              </Input>

              <Menu
                onSelectionChange={(value) => setSelected(value as string)}
                trigger={(triggerProps) => (
                  <Button {...triggerProps} endIcon={<ChevronDownIcon />}>
                    <Text>{selected}</Text>
                  </Button>
                )}
              >
                <MenuItem textValue="UN."><Text>UN.</Text></MenuItem>
                <MenuItem textValue="KG."><Text>KG.</Text></MenuItem>
                <MenuItem textValue="ML."><Text>ML.</Text></MenuItem>
                <MenuItem textValue="L."><Text>L.</Text></MenuItem>
              </Menu>

            </HStack>
        </VStack>
    )
}