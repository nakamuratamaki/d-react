export interface AnimalProps {
  name: string;
  imgUrl: string;
}

export function Animal(props: AnimalProps) {
  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto 25px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "rgb(123 118 118 / 30%) 2px 2px 8px",
        }}
      >
        <img
          src={props.imgUrl}
          style={{ width: "200px", borderRadius: "10px" }}
        />
        <h3 style={{ width: "70px", textAlign: "center" }}>{props.name}</h3>
      </div>
    </div>
  );
}
