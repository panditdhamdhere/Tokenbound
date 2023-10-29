import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import dotenv from "dotenv";
dotenv.config();
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'mumbai';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId={"18e0ebf2ec4d3cbb04d9ad93edb15b68"}
		>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
