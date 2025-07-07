import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Container,
  Divider,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Tenets() {
  return (
    <Box bg="gray.900" color="gray.100" minH="100vh" py={10} px={4}>
      <Container maxW="6xl">
        <Heading as="h1" size="2xl" mb={6} textAlign="center" color="teal.300">
          Tenets & Mode of Worship
        </Heading>

        <VStack spacing={8} align="start">
          {/* Church Tenets */}
          <Box>
            <Heading size="lg" mb={2}>Celestial Church Tenets</Heading>
            <List spacing={3} pl={4}>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Barefoot worship in reverence (Exodus 3:5)</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> White garments symbolizing purity</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Spiritual cleanliness before entering the sanctuary</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> No alcohol, pork, smoking, or sexual immorality</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Men and women sit separately during service</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Use of Holy Water, incense, and spiritual baths</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Prophecy and visions through the Holy Spirit</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Fasting and night vigils for spiritual strength</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" /> Observance of spiritual feasts: Harvest, Holy Mary Day</ListItem>
            </List>
          </Box>

          {/* Mode of Worship */}
          <Box>
            <Heading size="lg" mb={2}>Mode of Worship</Heading>
            <Text fontSize="lg" lineHeight="1.8">
              Celestial worship is spiritual and inspired by divine revelation. Members enter barefoot, dressed in white garments, and engage in spirit-led praise, prayer, and prophecy.
            </Text>
            <List spacing={3} mt={4} pl={4}>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Kneeling prayers and sacred hymns</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Prophetic utterances and visions</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Incense and Holy Water anointing</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Use of sanctified instruments (bells, drums)</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Scripture readings with divine interpretation</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Spirit-led dancing and thanksgiving</ListItem>
              <ListItem><ListIcon as={CheckCircleIcon} color="purple.400" /> Closing benediction and final hymn</ListItem>
            </List>
          </Box>
        </VStack>

        <Divider my={10} borderColor="gray.600" />

        <Text fontSize="md" textAlign="center" fontStyle="italic" color="gray.400">
          “Worship the Lord in the beauty of holiness.” — Psalm 96:9
        </Text>
      </Container>
    </Box>
  )
}
