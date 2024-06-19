import { useState } from "react";
import { Container, VStack, Button, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, Checkbox, RadioGroup, Radio, Stack, Select, Textarea, Switch, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text } from "@chakra-ui/react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(30);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Chakra UI Kitchen Sink</Text>
        
        <Button colorScheme="blue">Button</Button>
        
        <FormControl>
          <FormLabel>Input</FormLabel>
          <Input placeholder="Input field" />
        </FormControl>
        
        <FormControl>
          <FormLabel>Checkbox</FormLabel>
          <Checkbox>Checkbox</Checkbox>
        </FormControl>
        
        <FormControl>
          <FormLabel>Radio Group</FormLabel>
          <RadioGroup defaultValue="1">
            <Stack direction="row">
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        
        <FormControl>
          <FormLabel>Select</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        
        <FormControl>
          <FormLabel>Textarea</FormLabel>
          <Textarea placeholder="Textarea" />
        </FormControl>
        
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Switch</FormLabel>
          <Switch />
        </FormControl>
        
        <FormControl>
          <FormLabel>Slider</FormLabel>
          <Slider aria-label="slider-ex-1" defaultValue={30} onChange={(val) => setSliderValue(val)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box mt={2}>Value: {sliderValue}</Box>
        </FormControl>
        
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>This is the modal content.</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
        <Alert status="info">
          <AlertIcon />
          <AlertTitle>Info Alert!</AlertTitle>
          <AlertDescription>This is an informational alert.</AlertDescription>
        </Alert>
      </VStack>
    </Container>
  );
};

export default Index;