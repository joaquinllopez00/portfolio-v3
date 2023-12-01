export const HeaderWithLeftDivide = (props: { text: string }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: -85,
          top: 17,
          width: "56px",
          height: "6px",
          borderRadius: 3,
          background: "linear-gradient(270deg, #3F64E9 -33.26%, #FF004D 135.33%)",
        }}
      />
      <h1 className="text-4xl  font-extrabold">{props.text}</h1>
    </>
  );
};
