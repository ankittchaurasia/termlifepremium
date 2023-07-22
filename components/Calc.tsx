import { Text, Select, Modal, SimpleGrid, Alert, Button, NumberInput, SegmentedControl, Paper, Center, Container, Table } from '@mantine/core';
import {useState} from 'react';
import { useDisclosure } from '@mantine/hooks';
import { qx } from '@/data/datafile'


export default function Calculator() {
    
    function Seg({title, value, setValue, weight, ...textprop}:any){
        return(
            <div>
                <Text {...textprop} fz="sm">{title}</Text>
                <SegmentedControl size='sm' fullWidth data={[ {label:'Yes', value:weight}, {label:'No', value:'0'} ]} onChange={setValue} value={value} />
            </div>
        )
    }

    const [opened, { open, close }] = useDisclosure(false);
    
    const [plan, setPlan] = useState<string | null>();
    const [age, setAge] = useState<number | ''>();
    const [gender, setGender] = useState<string | null>(null);
    const [weight, setWeight] = useState<number | ''>();
    const [height, setHeight] = useState<number | ''>();
    const [diabetes, setDiabetes] = useState<string>('0');
    const [smoke, setSmoke] = useState<string>('0');
    const [heart, setHeart] = useState<string>('0');
    const [blood, setBlood] = useState<string>('0');
    const [cancer, setCancer] = useState<string>('0');

    const [result, setResult] = useState<any>([]);
    const [error, setError] = useState<boolean>(false);

    function Calculate(){
        if(!(plan && age && gender && weight && height && diabetes && smoke && heart && blood && cancer)) return setError(true);
        setError(false);

        const BMI =  Number(weight) / ((Number(height)/100) ** 2) //as height is in cm
        const npxValues = (qx as any)[gender].slice(Number(age) - 31).slice(0, 10)
    
        const BMI_Weight = BMI > 30 ? '0.03' : BMI < 25 ? '0' : '0.015'
        const factors:string[] = [ BMI_Weight, diabetes, smoke, heart, blood, cancer ]
        const sum_factors: number = factors.reduce((a: number, b: string) => a + Number(b), 0);

        const PremiumData = npxValues.map((val: number, index: number) => ({
            year: index + 1,
            premium: Number(plan) * val * ( 1 + sum_factors ),
            age: age + index,
        }))

        setResult(PremiumData)
        open();
    }

    return(
        <Container size="sm">
            <Paper>
               {error && <Alert mb="md" title="Error" color='red' withCloseButton onClose={()=>setError(false)}>Fill All The Inputs Please</Alert>}
                <Select label="Select Plan" placeholder="Death Benefit Plan" data={[
                    {value:'50000', label:'$50k'}, {value:"40000", label:"$40k"}, {value:"30000", label:"$30k"},
                ]} onChange={setPlan} value={plan} />
                <NumberInput value={age} onChange={setAge} placeholder="Your age" label="Your age" max={50} min={31} description="This Insurance is valid only for age group 31-50" />
                <Select value={gender} onChange={setGender} label="Gender" placeholder="Specify your Gender" data={['Male','Female']}  />
                <SimpleGrid cols={2} spacing="md">
                    <NumberInput value={weight} onChange={setWeight} placeholder="in kg" label="Weight" max={400} min={25}  step={0.5} />
                    <NumberInput value={height} onChange={setHeight} placeholder="in cm" label="Height" max={250} min={50}/>
                    <Seg title="Do you have Diabetes?" value={diabetes} setValue={setDiabetes} weight="0.12" />
                    <Seg title="Do you Smoke?" value={smoke} setValue={setSmoke} weight="0.2" />
                    <Seg title="Any Heart Disease?" value={heart} setValue={setHeart} weight="0.1" />
                    <Seg title="High Blood Pressure?" value={blood} setValue={setBlood} weight="0.07" />
                </SimpleGrid>
                <Seg mt={20} title="Any family history of Cancer?" value={cancer} setValue={setCancer} weight="0.5" />
                <Center><Button mt={20} onClick={Calculate}>Calculate</Button></Center>
            </Paper>
            {result.length > 0 && 
            <Modal opened={opened} onClose={close} title="Premium BreakDown Year by Year" centered styles={{title:{fontSize:"1.4rem", fontWeight:"bold", fontFamily:"Verdana"}}}>
                <Table striped highlightOnHover>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>At Age</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((elem:any)=>(
                            <tr key={elem.year}>
                                <td>{elem.year}</td>
                                <td>{elem.age}</td>
                                <td><strong>${elem.premium.toFixed(2)}</strong></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal>
            }
        </Container>
    )
}