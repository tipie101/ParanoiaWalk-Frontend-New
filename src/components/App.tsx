import React from "react";
import LeafletMap from './LeafletMap';
import { LayerContextProvider } from "./context/LayerContext";
import { ParanoidMap } from "./ParanoidButton";
import { Container } from "./Container";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Text } from '@chakra-ui/core';


const App:React.FC = () => {
  return (
    // <LayerContextProvider>
    //   <ParanoidMap />
    //  <LeafletMap />
    // </LayerContextProvider> 
    <Container>  
      <Hero/>
      <Main>
      </Main>
      <Footer>
        <Text>❤️</Text>
      </Footer>
      <ParanoidMap />
      <LayerContextProvider>
        <LeafletMap />
      </LayerContextProvider> 
    </Container>
  )
}

export default App;
