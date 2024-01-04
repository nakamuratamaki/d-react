export interface AnimalProps {
  name: string;
  imgUrl: string;
}

export function Animal(props: AnimalProps) {
  return (
    <div className="w-72 mx-auto mb-6">
      <div className="flex justify-between p-2.5 item-center rounded-lg shadow-md">
        <img src={props.imgUrl} className="w-50 rounded-lg" />
        <h3 className="w-18 text-center">{props.name}</h3>
      </div>
    </div>
  );
}
