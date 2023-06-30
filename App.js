import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { styled } from 'styled-components/native';

const Container = styled.View`
    flex: 1;
`

export default function App() {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
