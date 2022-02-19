import { SimpleTextAlertType } from './AlertConfigTypes';
import SimpleTextAlert from './SimpleTextAlert';

interface ISimpleTextError {
  text: string;
}

const SimpleTextError = ({ text }: ISimpleTextError) => (
  <SimpleTextAlert type={SimpleTextAlertType.ERROR} text={text} />
);

export default SimpleTextError;
