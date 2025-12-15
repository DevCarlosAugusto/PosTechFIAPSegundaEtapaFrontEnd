import React from 'react';
import { useField } from 'formik';

import InputGroupBlock, {
  Input__error__message_element,
  Input__label,
  Input__element,
  InputGroupBlock__container,
} from './styles';

/**
 * Componente de Input adaptado para Formik.
 * Ele usa o useField() para conectar o input ao estado global do Formik.
 *
 * @param {string} label - O texto exibido no label.
 * @param {string} id - O NOME ÚNICO do campo que DEVE corresponder ao schema Yup.
 * @param {string} type - O tipo do input (text, email, password, etc.).
 * @param {object} rest - Todas as props restantes (placeholder, min, max, etc.).
 */

export default function Index({ label, name, type = 'text', ...rest }) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const errorMessage = hasError ? meta.error : '';

  const labelModifierClass = hasError ? 'error-label' : '';
  const inputModifierClass = hasError ? 'error-input' : '';
  const errorClass = hasError ? 'InputGroupBlock--error' : '';

  return (
    <InputGroupBlock className={errorClass}>
      <InputGroupBlock__container class="InputGroupBlock__container">
        <Input__element aria-invalid={hasError ? 'true' : 'false'}
                      className={inputModifierClass}
                      id={name}
                      type={type}
                      {...field}
                      {...rest} />

        <Input__label className={labelModifierClass}
                      htmlFor={name}>{label}</Input__label>
      </InputGroupBlock__container>

      {hasError && (
        <Input__error__message_element role="alert">
          {errorMessage}
        </Input__error__message_element>
      )}
    </InputGroupBlock>
  );
}
