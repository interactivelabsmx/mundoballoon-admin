import React from 'react';
import AdminLayout from '@layouts/AdminLayout';
import LoadingText from '../loading/LoadingText';

interface ILoadingSection {
  text?: string;
}

const LoadingSection = ({ text }: ILoadingSection): JSX.Element => (
  <AdminLayout>
    <LoadingText text={text} />
  </AdminLayout>
);

export default LoadingSection;
