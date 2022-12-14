import About from "components/About";
import Carousel from "components/Carousel";
import EmptyState from "components/EmptyState";
import Footer from "components/Footer";
import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";
import useSigner from "state/signer";
import { Button } from "@material-tailwind/react";

const HomePage = () => {
  const { signer } = useSigner();
  const { listedNFTs } = useNFTMarket();

  const notConnected = !signer;
  const loading = signer && !listedNFTs;
  const empty = signer && listedNFTs && listedNFTs.length == 0;
  const loaded = signer && listedNFTs && listedNFTs.length > 0;

  return (
    <div>
      <Carousel />
      <div className="my-10 flex w-full flex-col">
        {notConnected && <EmptyState>Connect your wallet</EmptyState>}
        {loading && <EmptyState>Loading</EmptyState>}
        {empty && <EmptyState>Nothing to show here</EmptyState>}
        {loaded && (
          <div className="flex flex-wrap justify-center">
            <h1 className="my-5 flex w-full justify-center text-4xl font-bold">
              Products
            </h1>

            {listedNFTs
              ?.filter((item, index) => index < 3)
              .map((nft) => (
                <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id} />
              ))}
              <div className="flex w-full justify-center">
              <a href="/products"><button  className=" bg-black hover:bg-gray-800 text-white w-64 h-14 font-bold py-2 px-4 rounded-full">Go To All Products</button></a>
              </div>
            
          </div>
        )}
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
