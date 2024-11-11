import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Tabla from './Components/Titulo';
import Titulo from './Components/Titulo';

function App() {


  return (
    <MantineProvider>
      <Titulo/>
    </MantineProvider>
  )
}

export default App
