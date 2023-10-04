import Card from '../../Components/card/card';
import { NoteProps, color } from './notes-type';

export default function Note(props: NoteProps) {
  return (
    <Card
      bgColor={props.priority && color[props.priority]}
      height="2"
      padding="1"
    >
      <div>{props.text}</div>
    </Card>
  );
}
