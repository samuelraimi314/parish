import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  Divider,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'

export default function About() {
  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Box bg={bg} px={[4, 8, 16]} py={10}>
      <VStack spacing={8} align="start">

        <Heading size="lg" color="blue.600">
          About Glorious Light Parish
        </Heading>
        <Text fontSize="md" lineHeight="tall">
          Glorious Light Parish is a Celestial Church of Christ parish, focused on prayer,
          holiness, and community service. We believe in the saving grace of Jesus Christ and
          the power of the Holy Spirit.
        </Text>

        <Divider borderColor="blue.300" />

        <Heading size="lg" color="blue.600">
          About Celestial Church of Christ
        </Heading>
        <Text fontSize="md" lineHeight="tall">
          Celestial Church of Christ is a spiritual, worldwide, united, indivisible Holy Church
          which came into the world from heaven by DIVINE ORDER on the 29th of September 1947
          in Porto Novo, Republic of Benin through the founder of the Church, the Late Reverend,
          Pastor, Prophet, Founder Samuel Bilehou Joseph Oshoffa.
        </Text>

        <Divider borderColor="blue.300" />

        <Stack spacing={6}>
          <Box>
            <Heading id="vision" size="md" color="blue.500" mb={2}>
              Vision of the Church
            </Heading>
            <Text fontSize={['sm', 'md']} lineHeight="taller">
              To evangelize the world through the proclamation of the Word – the Good News of
              the Messiah Jesus Christ, and of the Kingdom of God; proclaiming deliverance to
              those bound by the shackles of Satan, healing the brokenhearted, the sick,
              the infirmed, restoring hope to the hopeless and those who are bound, while
              reinforcing the faith of all – both feeble and strong in the unfailing
              righteousness and faithfulness of God Almighty and Jesus Christ, the Lord & Savior.
            </Text>
          </Box>

          <Box>
            <Heading id="mission" size="md" color="blue.500" mb={2}>
              Primary Mission
            </Heading>
            <VStack spacing={3} fontSize={['sm', 'md']} align="start">
              <Text>• To worship God Almighty in holiness and reverence</Text>
              <Text>• To preach the Good News of Jesus Christ and the coming Kingdom</Text>
              <Text>• To prepare believers for the second coming of Christ</Text>
              <Text>• To work for Christian unity</Text>
              <Text>• To run schools, seminaries, and spiritual training centers</Text>
              <Text>• To restore Christian values in families and communities</Text>
              <Text>• To organize charitable and relief operations</Text>
              <Text>• To promote drug-free, crime-free environments</Text>
            </VStack>
          </Box>

          <Box>
            <Heading id="purpose" size="md" color="blue.500" mb={2}>
              Purpose
            </Heading>
            <Text fontSize={['sm', 'md']} lineHeight="taller">
              The purposes for which the church is organized are exclusively religious,
              charitable and educational.
            </Text>
          </Box>

          <Box>
            <Heading id="divine-order" size="md" color="blue.500" mb={2}>
              The Divine Order
            </Heading>
            <Text fontSize={['sm', 'md']} lineHeight="taller">
              God called Rev. Pastor Prophet Oshoffa on the day of a total eclipse in West Africa
              while in the forest of Dahomey (now Benin) seeking ebony wood. He spent forty days
              and nights in the wilderness, just as our Lord Jesus Christ did
              (Matthew 4:1–11, Mark 1:12–13, Luke 4:1–13). On 29th September 1947, he began the
              divine mission alone.
            </Text>
          </Box>

          <Box>
            <Heading size="md" color="blue.500" mb={2}>
              The Spiritual Message
            </Heading>
            <Text fontSize={['sm', 'md']} lineHeight="taller">
              On 19th September 1947, during prayer, a divine angel appeared to the founder in a
              radiant light with a message from God:
              <br /><br />
              <em>
                “It is the wish of God to send you on an errand of preaching into the world.
                Many nominal Christians are bound by earthly problems and run after dark powers.
                On their death, they cannot see Christ because Satan’s mark is upon them.
                I will assist you so that men may know I have sent you.”
              </em>
            </Text>
          </Box>

          <Box>
            <Heading id="oshoffa" size="md" color="blue.500" mb={2}>
              Prophet Samuel Bilewu Joseph Oshoffa
            </Heading>

            <Text fontSize={['sm', 'md']} lineHeight="taller" mb={3}>
              <strong>📅 Birth:</strong><br />
              Date: May 11, 1909<br />
              Place: Porto-Novo, Dahomey (now Benin Republic)
            </Text>

            <Text fontSize={['sm', 'md']} lineHeight="taller" mb={3}>
              <strong>⚰️ Death:</strong><br />
              Date: September 10, 1985<br />
              Place: Nigeria (from a car accident)
            </Text>

            <Text fontSize={['sm', 'md']} lineHeight="taller" mb={3}>
              <strong>🌟 Background:</strong><br />
              Samuel Oshoffa was born into a Methodist family of Yoruba descent. His father,
              Emmanuel Oshoffa, was a devout Christian and carpenter. Young Samuel was trained
              as a carpenter and trader, not a formally educated theologian.
            </Text>

            <Text fontSize={['sm', 'md']} lineHeight="taller" mb={3}>
              <strong>⚡ Spiritual Calling and the Founding of CCC:</strong><br />
              In 1947, while searching for a missing member of his trading party in the forest
              of Agangue (near Porto-Novo), Oshoffa became lost for three months. During this
              time, he reportedly had divine revelations and was filled with the Holy Spirit.
              <br /><br />
              Upon emerging, he discovered he had received healing powers, prophetic gifts,
              and the ability to raise the dead. The first miracle was the resurrection of his
              nephew. This marked the birth of the Celestial Church of Christ on September 29,
              1947, in Porto-Novo.
            </Text>

            <Text fontSize={['sm', 'md']} lineHeight="taller" mb={3}>
              <strong>📖 Teachings and Mission:</strong><br />
              Oshoffa preached holiness, healing, prophecy, and visions. He emphasized strict
              church doctrines like:
              <ul>
                <li>White garments and no shoes in church</li>
                <li>Men and women seated separately</li>
                <li>Spiritual cleansing, use of holy water</li>
                <li>Belief in angels and God's revelation</li>
              </ul>
            </Text>

            <Text fontSize={['sm', 'md']} lineHeight="taller">
              <strong>🌍 Legacy:</strong><br />
              CCC spread rapidly through Benin, Nigeria, and globally. Though leadership disputes
              followed his death, the church remains one of the largest African-initiated
              churches. Oshoffa is still regarded as a prophet and spiritual father by millions
              of Celestians.
            </Text>
          </Box>

        </Stack>
      </VStack>
    </Box>
  )
}
