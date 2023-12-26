export interface FruitProps {
  name: string;
  color: string;
}
export function Fruit(props: FruitProps) {
  return (
    <div
      style={{
        background: props.color,
        padding: "10px",
        width: "300px",
      }}
    >
      {/* {props.name} */}
      {tashizan({
        a: 1,
        b: 2,
      })}
    </div>
  );
}

type TashizanInput = {
  a: number;
  b: number;
};

function tashizan(input: TashizanInput) {
  return input.a + input.b;
}
