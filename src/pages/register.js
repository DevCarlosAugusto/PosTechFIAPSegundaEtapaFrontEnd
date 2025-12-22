import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import InputGroupBlock from "../components/forms/InputGroup/index.js";
import { ButtonBox } from "../components/forms/Button/styles.js";

export default function Register() {
  const router = useRouter();

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

  const initialValues = {
    nome: "",
    email: "",
    password: "",
    user_type: "",
    serie: "",
    subject: "",
  };

  const validate = (values) => {
    const errors = {};
    const precisaSerieESubject = values.user_type === "ALUNO";

    if (!values.nome?.trim()) errors.nome = "Informe o nome.";
    if (!values.email?.trim()) errors.email = "Informe o e-mail.";
    if (!values.password?.trim()) errors.password = "Informe a senha.";
    if (!values.user_type?.trim()) errors.user_type = "Selecione o tipo de usuário.";

    if (precisaSerieESubject) {
      if (!values.serie?.trim()) errors.serie = "Informe a série.";
      if (!values.subject?.trim()) errors.subject = "Informe a matéria.";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    setStatus({ error: "", success: "" });

    try {
      const response = await fetch(`${BACKEND_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar usuário");
      }

      setStatus({ error: "", success: "Usuário cadastrado com sucesso!" });

      setTimeout(() => router.push("/login"), 1000);
    } catch (err) {
      setStatus({ error: err.message, success: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ padding: "0 0 2rem", fontWeight: "600" }}>Cadastro</h1>

      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ values, isValid, isSubmitting, status, setFieldValue }) => {
          const precisaSerieESubject = values.user_type === "ALUNO";

          return (
            <Form autoComplete="off">
              {status?.error ? <p style={{ color: "red" }}>{status.error}</p> : null}
              {status?.success ? <p style={{ color: "green" }}>{status.success}</p> : null}

              <InputGroupBlock label="Nome" name="nome" type="text" />
              <InputGroupBlock label="E-mail" name="email" type="email" />
              <InputGroupBlock label="Senha" name="password" type="password" />

              <div style={{ margin: "0 0 1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
                  Tipo de usuário
                </label>

                <select
                  name="user_type"
                  value={values.user_type}
                  onChange={(e) => setFieldValue("user_type", e.target.value)}
                  style={{ width: "100%", padding: "12px", borderRadius: 8 }}
                >
                  <option value="">Selecione</option>
                  <option value="ALUNO">Aluno</option>
                  <option value="PROFESSOR">Professor</option>
                </select>
              </div>

               {/* Só mostra Série e Matéria se for aluno */}
              {precisaSerieESubject && (
                <>
                  <InputGroupBlock label="Série (ex: 5ª Série)" name="serie" type="text" />
                  <InputGroupBlock label="Matéria (ex: Matemática)" name="subject" type="text" />
                </>
              )}

              <ButtonBox disabled={!isValid || isSubmitting} type="submit">
                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
              </ButtonBox>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
