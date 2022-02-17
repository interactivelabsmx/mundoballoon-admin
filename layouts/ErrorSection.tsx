import React from 'react';
import AdminLayout from '@layouts/AdminLayout';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';

interface IErrorSection {
  text?: string;
}

const ErrorSection = ({ text }: IErrorSection) => (
  <AdminLayout>
    <SimpleTextAlert type={SimpleTextAlertType.ERROR} text={text} />
  </AdminLayout>
);

export default ErrorSection;
