import {
  SimpleTextAlertType,
  SimpleTextAlertTypeConfig,
} from './AlertConfigTypes';
import DismissAlertButton from './DismissAlertButton';

interface ISimpleTextAlert {
  text?: string;
  type: SimpleTextAlertType;
  onDismissAlert?: () => void;
}

const SimpleTextAlert = ({
  text = 'Something went wrong, please try again latter',
  type,
  onDismissAlert,
}: ISimpleTextAlert) => {
  const Icon = SimpleTextAlertTypeConfig[type].Icon;
  return (
    <div
      className={`rounded-md ${SimpleTextAlertTypeConfig[type].colors.bg} p-4`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon
            className={`h-5 w-5 ${SimpleTextAlertTypeConfig[type].colors.icon}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p
            className={`text-sm font-medium ${SimpleTextAlertTypeConfig[type].colors.text}`}
          >
            {text}
          </p>
        </div>
        <div className="ml-auto pl-3">
          {onDismissAlert && (
            <DismissAlertButton type={type} onClick={onDismissAlert} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleTextAlert;
