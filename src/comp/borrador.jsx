import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Coins = () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CDogecoin&vs_currencies=usd%2Cars";
  const [prices, setPrices] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setPrices([responseJSON]);
    console.log([responseJSON]);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
        <div className="text-center">
            <h1 className="bg-dark text-warning mt-3 ml-1 mr-1">Cotizacion en tiempo real</h1>
        </div>
      <ul>
        {!prices
          ? "Cargando..."
          : prices.map((price, index) => {
              return (
                <div className=" mr-5">
                  <div class="container mt-3 ">
                    <div class="row text-center">
                      <div class="col-sm bg-warning m-2 ">
                        <h2> Bitcoin </h2>

                        <img
                          src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png"
                          alt=""
                          className="w-25 p-1"
                          srcset=""
                        />
                        <div className="text-center rounded-2 blur ">
                          <h4 className="p-3">
                            {price.bitcoin.usd}{" "}
                            <p className="text-success">USD</p>{" "}
                            {price.bitcoin.ars}
                            <p className="text-primary">ARS</p>
                          </h4>
                        </div>
                      </div>
                      <div class="col-sm bg-warning m-2">
                        <h2>Ethereum</h2>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"
                          alt=""
                          className="w-25 p-1"
                          srcset=""
                        />
                        <div className="text-center rounded-2 blur">
                          <h4 className="p-3">
                            {price.ethereum.usd}{" "}
                            <p className="text-success">USD</p>{" "}
                            {price.ethereum.ars}
                            <p className="text-primary">ARS</p>
                          </h4>
                        </div>
                      </div>
                      <div class="col-sm bg-warning m-2">
                        <h2>DogeCoin</h2>
                        <img
                          src="https://www.pngplay.com/wp-content/uploads/8/Dogecoin-PNG-Download-Image.png"
                          alt=""
                          className="w-25 p-1"
                          srcset=""
                        />
                        <div className="text-center rounded-2 blur">
                          <h4 className="p-3">
                          {price.dogecoin.usd}{" "}
                            <p className="text-success">USD</p>{" "}
                            {price.dogecoin.ars}
                            <p className="text-primary">ARS</p>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                  
                                         
                  </div>
                </div>
                
                
              );
            })}
      </ul>
    </div>
  );
};

export default Coins;
