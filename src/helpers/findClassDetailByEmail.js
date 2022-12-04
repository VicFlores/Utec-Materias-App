export const findClassDetailByEmail = async (decoded, token) => {
  try {
    const response = await fetch(
      'https://utec-materias.onrender.com/api/v1/classdetail/lesson',
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token,
          role: `${decoded.roles}`,
          email: `${decoded.mail}`,
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return { message: 'Error to request users', error };
  }
};
