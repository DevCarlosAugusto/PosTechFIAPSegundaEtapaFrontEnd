import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
    user_type: "",
    serie: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    console.log("FORM:", form);

const precisaSerieESubject = form.user_type === "ALUNO";

if (
  !form.nome?.trim() ||
  !form.email?.trim() ||
  !form.password?.trim() ||
  !form.user_type?.trim() ||
  (precisaSerieESubject && (!form.serie?.trim() || !form.subject?.trim()))
) {
  setError("Preencha todos os campos.");
  return;
}


    setLoading(true);

    try {
      console.log("Payload enviado:", form);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar usuário");
      }

      setSuccess("Usuário cadastrado com sucesso!");
      setTimeout(() => router.push("/login"), 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1>Cadastro</h1>

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <select name="user_type" value={form.user_type} onChange={handleChange}>
          <option value="">Selecione o tipo de usuário</option>
          <option value="ALUNO">Aluno</option>
          <option value="PROFESSOR">Professor</option>
        </select>
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
        />

        <input
          name="serie"
          placeholder="Série (ex: 5ª Série)"
          value={form.serie}
          onChange={handleChange}
        />

        <input
          name="subject"
          placeholder="Matéria (ex: Matemática)"
          value={form.subject}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  },
  form: {
    width: 350,
    display: "grid",
    gap: 12,
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};
