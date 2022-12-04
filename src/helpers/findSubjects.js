export const findSubjects = async (decoded, token) => {
  try {
    const response = await fetch(
      'https://utec-materias.onrender.com/api/v1/subjects',
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token,
          role: `${decoded.roles}`,
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return { message: 'Error to request users', error };
  }
};
