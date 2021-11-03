interface IErrorText {
  text: string;
  fieldName: string;
}

const ErrorText = ({ text, fieldName }: IErrorText) => (
  <p className="mt-2 text-sm text-red-600" id={`${fieldName}-error`}>
    {text}
  </p>
);

export default ErrorText;
