import { Box, Flex, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import Product from "./Product";
import Dashboard from "./AllProduct";


function Home(){


    return (
        <>
        <Flex maxW="95%"  margin="auto" marginTop="20px" gap="10px">
            <Box maxh="600px" maxW="45%">
                <Image src="https://img.gkbcdn.com/s3/bn/2301/740x670-63d7599d2b40c930200ab207.jpg"/>
            </Box>
            
            <Product />
            
        </Flex>
       
        
        <Box maxW="95%" margin="auto" marginTop="30px">
        <Text fontSize="20px" marginBottom="20px">Trending Categories</Text>
            <Grid templateColumns="repeat(3,1fr)" gap="10px">
                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/s3/bn/2301/dyads11dog2-63c66dea2b40c939489cd456.gif"/>
                    <Text>Smart Home & Garden</Text>
                    <Text color="grey">Smart cleanung robots and vacuums,
                          living room furniture, patio & garden supplies,
                          up to 60% off!
                    </Text>
                </GridItem>
           
                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/bn/2212/488x274-63998a412b40c92ac0082d77._p1_.jpg"/>
                    <Text>E-transport</Text>
                    <Text color="grey">New e-rides for less. Skip gas prices with electric bikes,
                        scooters & beyond.
                    </Text>
                </GridItem>

                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg"/>
                    <Text>3D Printers</Text>
                    <Text color="grey">3D printers allow you to bring digitally modeled designs to,
                        life by using highly detailed filament printing.
                    </Text>
                </GridItem>
                </Grid>
        </Box>

        <Box maxW="95%" margin="auto" marginTop="30px" marginBottom="20px">
        <Text fontSize="20px" marginBottom="20px">New For You</Text>
            <Grid templateColumns="repeat(4,1fr)" gap="10px">
                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/bn/2302/redmi276348-63f49aa02b40c95e941a2b0a._p1_.jpg"/>
                </GridItem>
           
                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/p/2023-02-23/GXMO-N42-Mini-PC-Windows-11-US-519553-0._w280_p1_.jpg"/>
                    <Text>GXMO N42 Mini PC Windows 11, Intel Celeron N4020C Intel UHD</Text>
                    <Text fontSize="20px">€133.85</Text>
                </GridItem>

                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/p/2023-02-07/Alldocube-iPlay-50-Pro-2K-Tablet-MediaTek-MT6789-Octa-core-CPU-519292-0._w280_p1_.jpg"/>
                    <Text>Alldocube iPlay 50 Pro 2K Tablet MediaTek MT6789 Octa-core CPU,</Text>
                    <Text fontSize="20px">€168.49
                    </Text>
                </GridItem>

                <GridItem border="1px solid #E2E8F0">
                    <Image src="https://img.gkbcdn.com/p/2023-02-15/S128-Mini-Drone-Obstacle-Avoidance-2-Batteries-2-HD-Cameras-519406-0._w280_p1_.jpg"/>
                    <Text>S128 Mini Drone 4K HD Camera FPV Three-sided Obstacle</Text>
                    <Text fontSize="20px">€32.75
                    </Text>
                </GridItem>
            </Grid>
        </Box>
        
        <Dashboard />
        </>
    )
}

export default Home;