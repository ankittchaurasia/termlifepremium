import Calc from '@/components/Calc'
import { SimpleGrid, Container, Image, Card, Title, ActionIcon } from '@mantine/core'
import { ActivityHeartbeat } from 'tabler-icons-react';


export default function Home() {

  return (
    <>
      <Container mb={20}>
      <div style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
      <ActionIcon size="xl">
            <ActivityHeartbeat size="2rem" strokeWidth={1.5} /> |
        </ActionIcon>
        <Title order={1} mt={20} mb={20} size={20}> Term Life Insurance Premium Calculator</Title>
        </div>
            <Calc />
      </Container>
    </>
  )
}
