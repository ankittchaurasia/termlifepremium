import Calc from '@/components/Calc'
import { Container, Title, ActionIcon } from '@mantine/core'
import { ActivityHeartbeat } from 'tabler-icons-react';

export default function Home() {
 

  return (
    <>
      <Container mb={20}>
      <div style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
      <ActionIcon c="pink" size="xl">
            <ActivityHeartbeat size="2rem" strokeWidth={1.5} /> |
        </ActionIcon>
        <Title c="pink" order={1} mt={20} mb={20} size={20}> Term Life Insurance Premium Calculator</Title>
        </div>
            <Calc />
      </Container>
    </>
  )
}
