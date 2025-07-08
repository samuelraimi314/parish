import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  SimpleGrid,
  Image,
  Stack,
  Divider,
  HStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import shepherdImage from '../assets/shepherd.png'
import logo from '../assets/logo.png' // Importing logo from assets folder

export default function Home() {
  return (
    <Box>

      {/* Logo + Intro Section */}
      <Box p={10} textAlign="center">
        <VStack spacing={6}>
          <HStack spacing={3} justify="center">
            <Image src={logo} alt="Logo" boxSize="40px" /> <br/>
            <Text fontWeight="bold" fontSize="xl">Glorious Light Parish</Text>
          </HStack>
          <Text fontSize="lg">
            Welcome to our church website. We are built on love the love of God, the grace of our Lord Jesus Christ and the felloship of the Holy Ghost.
          </Text>
        </VStack>
      </Box>

      <Divider />

      {/* Hero Section */}
      <Box
        bgImage={`url(${heroImage})`}
        bgSize="cover"
        bgPos="center"
        py={24}
        px={6}
        color="white"
        textAlign="center"
        position="relative"
        _before={{
          content: `""`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      >
        <VStack spacing={4} position="relative" zIndex={1}>
          <Heading fontSize={['2xl', '4xl']}>Glorious Light Parish</Heading>
          <Text fontSize="lg">A Church Built on Light, Love, Holiness and reverence to Jehovah Almighty</Text>
          <Button as={Link} to="/about" colorScheme="yellow" size="lg">
            Worship With us
          </Button>
        </VStack>
      </Box>

      {/* Welcome Section */}
      <Box py={10} px={[4, 8, 16]} textAlign="center">
        <Heading mb={4} color="blue.600">Welcome</Heading>
        <Text fontSize="lg" maxW="800px" mx="auto">
          Welcome to Glorious Light Parish, a place where we worship The Father in truth and spirit. We are committed to prayer, worship, holiness, and praise to our GOD.
        </Text>
        <Stack mt={8} align="center" spacing={4}>
          <Image
            src={shepherdImage}
            alt="Shepherd"
            borderRadius="full"
            boxSize="120px"
            objectFit="cover"
          />
          <Text fontStyle="italic">“You are warmly welcome in Jesus' name <br/> God bless you.”</Text>
        </Stack>
      </Box>

      {/* Quick Links Section */}
      <Box py={10} px={[4, 8, 16]} bg="gray.50">
        <Heading mb={6} textAlign="center" color="blue.600">Explore</Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={6}>
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={2}>🕊️ About Us</Heading>
            <Text mb={4}>Learn about our church vision, mission, and founder.</Text>
            <Button as={Link} to="/about" colorScheme="blue" size="sm">
              Learn More
            </Button>
          </Box>
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={2}>📜 Tenets</Heading>
            <Text mb={4}>Understand what we believe and stand for.</Text>
            <Button as={Link} to="/tenets" colorScheme="blue" size="sm">
              Learn More
            </Button>
          </Box>
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={2}>🕘 Service Times</Heading>
            <Text mb={4}>Join us for worship and midweek fellowship.</Text>
            <Button as={Link} to="/contact" colorScheme="blue" size="sm">
              Plan Visit
            </Button>
          </Box>
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={2}>📞 Contact</Heading>
            <Text mb={4}>Get in touch or send a prayer request.</Text>
            <Button as={Link} to="/contact" colorScheme="blue" size="sm">
              Contact Us
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Service Times Section */}
      <Box py={10} px={[4, 8, 16]}>
        <Heading mb={4} color="blue.600">Service Times</Heading>
        <Text fontSize="md">📅 Sunday Service: 10:00 AM</Text>
        <Text fontSize="md">📖 Bible Study: Wednesday 6:00 PM</Text>
        <Text fontSize="md">📍 Location: 12 Odashi Street Adaloko, ijanki Ojo, Lagos</Text>
        <Button as={Link} to="/contact" mt={4} colorScheme="teal">
          View Map
        </Button>
      </Box>

      {/* Bible Verse Section */}
      <Box bg="blue.50" py={12} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="blue.700">
          “The Lord is my light and my salvation — whom shall I fear?”
        </Text>
        <Text fontSize="lg" color="blue.500" mt={2}>– Psalm 27:1</Text>
      </Box>

      {/* Call to Action Section */}
      <Box py={10} px={6} textAlign="center">
        <Heading size="lg" mb={4} color="blue.600">Join Us This Week</Heading>
        <Text mb={6}>Ready to worship, learn, or reach out? We'd love to hear from you.</Text>
        <Stack direction={['column', 'row']} justify="center" spacing={4}>
          <Button as={Link} to="/contact" colorScheme="blue">Contact Us</Button>
          <Button as={Link} to="/about" colorScheme="green">What We Believe</Button>
        </Stack>
      </Box>

    </Box>
  )
}
