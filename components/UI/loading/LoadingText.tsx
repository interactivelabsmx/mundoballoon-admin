import LoadingSpinner from './LoadingSpinner';

interface ILoadingText {
  text?: string;
}

const LoadingText = ({ text = 'Loading...' }: ILoadingText) => (
  <div className="w-full flex align-middle p-2">
    <LoadingSpinner /> {text}
  </div>
);

export default LoadingText;
