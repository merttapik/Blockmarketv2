import EmptyState from "components/EmptyState";
import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";
import useSigner from "state/signer";

const ProductPage = () => {
  const { signer } = useSigner();
  const { listedNFTs } = useNFTMarket();

  const notConnected = !signer;
  const loading = signer && !listedNFTs;
  const empty = signer && listedNFTs && listedNFTs.length == 0;
  const loaded = signer && listedNFTs && listedNFTs.length > 0;

  return (
    <div>
     
    <div className="flex w-full flex-col my-10">
      {notConnected && <EmptyState>Connect your wallet</EmptyState>}
      {loading && <EmptyState>Loading</EmptyState>}
      {empty && <EmptyState>Nothing to show here</EmptyState>}
      {loaded && (
        <div className="flex flex-wrap justify-center">
          <h1 className="w-full flex justify-center text-4xl font-bold my-5">Products</h1>
          
          {listedNFTs?.map((nft) => (
            <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id} />
          ))}
        </div>
      )}
    </div>
   
    </div>
  );
};

export default ProductPage;
