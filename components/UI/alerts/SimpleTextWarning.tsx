import { SimpleTextAlertType } from './AlertConfigTypes';
import SimpleTextAlert from './SimpleTextAlert';

interface ISimpleTextWarning {
  text: string;
}

const SimpleTextWarning = ({ text }: ISimpleTextWarning) => (
  <SimpleTextAlert type={SimpleTextAlertType.WARNING} text={text} />
);

export default SimpleTextWarning;
