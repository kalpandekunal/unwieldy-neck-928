import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner,Grid,GridItem,Image} from "@chakra-ui/react";
import axios from "axios";
import {useEffect,useReducer} from "react";
import {Link} from "react-router-dom";



const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,action) => {
  switch(action.type){
    case "REQUEST" :
      return {
        ...state,
        isLoading:false,
        error:null
      };

      case "SUCCESS" :
        return {
          ...state,
          data:action.payload,
          isLoading:false,
          error:null
        };
        case "FAIL":
          return {
            ...state,
            data:[],
            isLoading:false,
            error:action.payload,
          };

        default:
          throw  new Error();
      
  }

};

function Dashboard() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const {data,isLoading,error} = state;


  const getData = ()=>{
    dispatch({type:"REQUEST"})
    
    
    axios.get("http://localhost:3000/data").then((res)=>{dispatch({type:"SUCCESS",payload:res.data});

    
  })
  .catch((err)=>dispatch({type:"FAIL",payload:err.message}))
  
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <SimpleGrid templateColumns="repeat(4,1fr)" gap="2">
      {
      data.map((el)=> <Box key={el.id}>
        <Center>
            <Link to="/allproducts">
      <Img src={el.image}></Img>
      </Link>
      </Center>
      <VStack  spacing={2} p={2}>
      <Text fontSize={"20px"} fontWeight="bold">{el.desc}</Text>
      <Text>{el.price}</Text>
      </VStack>
      </Box>
      )
      }
      </SimpleGrid>
  )
}

export default Dashboard;