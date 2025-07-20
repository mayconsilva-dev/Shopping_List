import { Text, VStack, Input, InputField } from "@gluestack-ui/themed";

export function InputItem(){
    return(
        <VStack pl="$12" pr="$12">
          
          <Text 
            fontFamily="$body"
            fontSize="$xs"
            c="$gray200"
            pb="$2"
          >
              Item
          </Text>

          <Input 
            variant="outline"
            w="$80"
            bg="$gray500"
            borderRadius={7}
            borderColor="$gray300"
            
          >
            <InputField 
              fontFamily="$body"
              c="$gray200"
            />
          </Input>
          
        </VStack>
    )
}