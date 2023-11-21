import React from "react";

const Home = () => {
    const [isConnected, setIsConnected] = React.useState(false);

    const handleClick = () =>{
        setIsConnected(!isConnected);
    }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Whatsapp Connection Status
      </h1>
      {isConnected ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <text style={{ fontSize: 25, fontWeight: "bold" }}>Connected</text>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "green",
            }}
          ></div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <text style={{ fontSize: 25, fontWeight: "bold" }}>Disconnected</text>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "red",
            }}
          ></div>
        </div>
      )}
      {/* Remove below comment If you want to hide the button when it is connected */}
      {/* {!isConnected && ( */}  
        <div style={{ marginTop: "5%" }}>
          <button
            style={{
              width: 150,
              height: 50,
              backgroundColor: "green",
              borderRadius: 20,
              color: "white",
              fontSize: 22,
            }}
            onClick={handleClick}
          >
            {isConnected ? "Disconnect" : "Connect"}
          </button>
        </div>
      {/* )} */}
    </div>
  );
};

export default Home;
