import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getPostById, updatePost } from '../../../services/posts.service.js';
import { useAuth } from '../../../contexts/AuthContext';

import PostForm from '../../../components/forms/PostForm';
import { ContainerHome } from '../../styles.js';

export default function PostEditPage(values, { postExistente }) {
  const router = useRouter();
  const { user } = useAuth();

  if (user.user_type !== 'PROFESSOR') {
    // router.push(`/posts/edit/${postExistente.id}`);
    return null;
  }

  const handleEdit = async (values) => {
    console.info(values, 'VALUES EDIT');
    console.info(postExistente, 'EXISTENTE');
  };

  return (
    <ContainerHome>
      <h2 className="title">Editar Post</h2>

      <PostForm initialValues={postExistente}
                onSubmit={handleEdit}
                buttonLabel="Salvar Alterações" />
    </ContainerHome>
  );
}
