import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from '../loading/LoadingText';
import { IUserPhoneForm } from '../../Auth/FirebasePhoneForm';
import { useGetCountryCodesQuery } from './graphql/CountryCodeSelector.gql';

interface ICountryCodeSelector {
  field: ControllerRenderProps<IUserPhoneForm, 'countryCode'>;
  label: string;
}

const CountryCodeSelector = ({
  field,
  label,
}: ICountryCodeSelector): JSX.Element => {
  const { loading, error: loadError, data } = useGetCountryCodesQuery();

  if (loading) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  const { countryCodes } = data;

  return (
    <div className="absolute inset-y-0 left-0 flex items-center">
      <label htmlFor="country-code" className="sr-only">
        {label}
      </label>
      <select
        {...field}
        autoComplete="country"
        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
      >
        {countryCodes.map((cc) => (
          <option key={cc.fifa} value={cc.dial}>
            +{cc.dial}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCodeSelector;
