import { ButtonBox } from './styles.js';

/**
 * Componente de Button comum para múltiplos cenários.
 *
 * @param {ReactNode} children - Conteúdo interno (texto/ícone)
 * @param disabled
 * @param {boolean} loading - Se verdadeiro, exibe estado de carregamento.
 * @param {string} type - O tipo do input (button como valor 'default', reset ou submit).
 * @param {object} rest - Todas as props restantes (title, disabled, etc.).
 */

export default function Button({ children, disabled, loading = false, type = 'button', ...rest }) {
  return (
    <ButtonBox className={loading ? 'button--loading' : ''}
               disabled={disabled || loading}
               type={type}
               {...rest}>
      {loading ? 'Carregando...' : children}
    </ButtonBox>
  );
}
