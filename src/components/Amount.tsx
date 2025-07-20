import { HStack, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectItem
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed"

export function Amount(){
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

              <Select>
                <SelectTrigger 
                  variant="outline" 
                  w="$16" 
                  borderColor="$gray300"
                  borderTopLeftRadius="$nome"
                  borderBottomLeftRadius="$nome"
                  borderTopRightRadius="$md"
                  borderBottomRightRadius="$md"
                >
                    <SelectInput placeholder="UN."/>
                    <SelectIcon as={ChevronDownIcon} mr="$2"/>
                </SelectTrigger>

                <SelectPortal>
                    <SelectContent>
                        <SelectItem label="UN." value="unidade"/>
                        <SelectItem label="KG" value="kg"/>
                        <SelectItem label="ML" value="ml"/>
                        <SelectItem label="L" value="litros"/>
                    </SelectContent>
                </SelectPortal>
              </Select>
            </HStack>
        </VStack>
    )
}