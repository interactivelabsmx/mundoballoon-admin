import React from 'react';
import AdminLayout from '@layouts/AdminLayout';
import { SimpleTextAlertType } from '../alerts/AlertConfigTypes';
import SimpleTextAlert from '../alerts/SimpleTextAlert';

interface IErrorSection {
  text?: string;
}

const ErrorSection = ({ text }: IErrorSection): JSX.Element => (
  <AdminLayout>
    <SimpleTextAlert type={SimpleTextAlertType.ERROR} text={text} />
  </AdminLayout>
);

export default ErrorSection;
