import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Box, Flex, Button, HStack, Spacer } from '@chakra-ui/react'
import Home from './pages/Home'
import About from './pages/About'
import Tenets from './pages/Tenets'
import Contact from './pages/Contact'

function NavButton({ to, label }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Button
      as={Link}
      to={to}
      variant="link"
      fontWeight={isActive ? 'bold' : 'normal'}
      color={isActive ? 'yellow.300' : 'white'}
      borderBottom={isActive ? '2px solid yellow' : 'none'}
      _hover={{ textDecoration: 'none' }}
    >
      {label}
    </Button>
  )
}

function App() {
  return (
    <Box>
      {/* Navbar */}
      <Flex bg="blue.700" color="white" px={6} py={4} align="center">
        <Box fontWeight="bold" fontSize="xl">Glorious Light</Box>
        <Spacer />
        <HStack spacing={4}>
          <NavButton to="/" label="Home" />
          <NavButton to="/about" label="About" />
          <NavButton to="/tenets" label="Tenets" />
          <NavButton to="/contact" label="Contact" />
        </HStack>
      </Flex>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tenets" element={<Tenets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Box textAlign="center" py={4} bg="gray.100" mt={10}>
        © 2025 Glorious Light Parish. All rights reserved.
      </Box>
    </Box>
  )
}

export default App
