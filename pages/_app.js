import '../styles/globals.css'
import {Box} from "@mui/material"

function MyApp({ Component, pageProps })
{
  const getLayout = Component.getLayout || ((page) => page )
  return ( 
  <Box>
   
  {getLayout(<Component {...pageProps} />)}

  </Box>
  );
}

export default MyApp
