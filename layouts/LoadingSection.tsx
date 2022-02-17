import React from 'react';
import AdminLayout from '@layouts/AdminLayout';
import LoadingText from '@components/UI/loading/LoadingText';

interface ILoadingSection {
  text?: string;
}

const LoadingSection = ({ text }: ILoadingSection) => (
  <AdminLayout>
    <LoadingText text={text} />
  </AdminLayout>
);

export default LoadingSection;
